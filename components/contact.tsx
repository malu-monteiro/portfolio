"use client";

import Image from "next/image";

import { useActionState, useRef } from "react";
import { useFormStatus } from "react-dom";

import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { PurpleGlowEffect } from "./ui/purple-glow-effect";

import { MaxWidthWrapper } from "./max-width-wrapper";

import { sendEmail, type FormState } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" disabled={pending}>
      {pending ? "Sending..." : "Submit"}
    </Button>
  );
}

export default function Contact() {
  const initialState: FormState = { message: "", error: false };
  const [state, formAction] = useActionState(sendEmail, initialState);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = (formData: FormData) => {
    turnstileRef.current?.reset();
    formAction(formData);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24" id="contact">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <PurpleGlowEffect />
            <Image
              src="/new-message-contact.svg"
              alt="About me illustration"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain relative z-10"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <Badge variant="status">Contact me</Badge>
            <h3 className="font-light tracking-tighter">
              Lets build something amazing together!
            </h3>

            <form action={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full p-3 border border-white/20 rounded-lg bg-transparent text-white placeholder-gray-400"
                  placeholder="your_email@example.com"
                  required
                />
                {state.fieldErrors?.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.fieldErrors.email[0]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full p-3 border border-white/20 rounded-lg bg-transparent text-white placeholder-gray-400"
                  placeholder="What would you like to talk about?"
                  required
                />
                {state.fieldErrors?.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.fieldErrors.subject[0]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block w-full p-3 border border-white/20 rounded-lg bg-transparent text-white placeholder-gray-400"
                  placeholder="Leave a message..."
                  required
                />
                {state.fieldErrors?.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {state.fieldErrors.message[0]}
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile */}
              <div className="flex justify-start">
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  options={{
                    theme: "dark",
                    size: "normal",
                    action: "contact-form",
                    language: "en",
                  }}
                  onError={() => {
                    console.error("Turnstile error occurred");
                  }}
                />
              </div>

              <div className="flex items-center justify-start gap-4 pt-2">
                <Button type="reset" variant="secondary">
                  Cancel
                </Button>
                <SubmitButton />
              </div>

              {state.message && (
                <p
                  className={`mt-2 text-sm ${
                    state.error ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
