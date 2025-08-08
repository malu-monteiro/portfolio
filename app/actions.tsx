"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  email: z
    .email({ message: "Invalid email address" })
    .max(100, { message: "Email address too long" }),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject too long"),
  message: z
    .string()
    .min(10, "Message too short")
    .max(1000, "Message too long"),
});

export type FormState = {
  message: string;
  error: boolean;
  fieldErrors?: {
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }),
      }
    );

    const result = await response.json();
    return result.success;
  } catch {
    return false;
  }
}

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const turnstileToken = formData.get("cf-turnstile-response") as string;

  if (!turnstileToken || !(await verifyTurnstileToken(turnstileToken))) {
    return {
      message: "Security verification failed. Please try again.",
      error: true,
    };
  }

  const validationResult = ContactSchema.safeParse({
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validationResult.success) {
    const formattedErrors = validationResult.error.format();

    return {
      message: "Please correct the errors below.",
      error: true,
      fieldErrors: {
        email: formattedErrors.email?._errors,
        subject: formattedErrors.subject?._errors,
        message: formattedErrors.message?._errors,
      },
    };
  }

  const { email, subject, message } = validationResult.data;

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.MY_PERSONAL_EMAIL!,
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    return {
      message: "Message sent successfully! I'll get back to you soon.",
      error: false,
    };
  } catch {
    return {
      message: "Failed to send message. Please try again later.",
      error: true,
    };
  }
}
