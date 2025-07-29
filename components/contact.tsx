import Image from "next/image";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { PurpleGlowEffect } from "./ui/purple-glow-effect";

import { MaxWidthWrapper } from "./max-width-wrapper";

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24" id="contact">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            {/* Purple Glow Effect */}
            <PurpleGlowEffect />

            <Image
              src="/new-message-contact.svg"
              alt="About me illustration"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain relative z-10"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <Badge variant="status">Contact me</Badge>

            <h3 className="font-light tracking-tighter">
              Lorem ipsum dolor sit amet
            </h3>

            <form action="#" className="space-y-6">
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
                  className="block w-full p-3 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="your-email@example.com"
                  required
                />
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
                  className="block w-full p-3 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="What would you like to talk about?"
                  required
                />
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
                  className="block w-full p-3 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="Leave a message..."
                  required
                />
              </div>

              <div className="flex justify-start gap-4 pt-2">
                <Button variant="secondary">Cancel</Button>
                <Button variant="primary">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
