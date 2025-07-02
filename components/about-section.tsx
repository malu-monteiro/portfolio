import Image from "next/image";
import { Container } from "./ui/container";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black" id="about">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            {/* Purple Glow Effect */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[285px] h-[53px] bg-purple-600 rounded-full blur-[40px] z-20"
              aria-hidden="true"
            />

            <Image
              src="/aboutimg.png"
              alt="About me illustration"
              width={500}
              height={500}
              className="max-w-full h-auto object-contain relative z-10"
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
              About me
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-purple-100 to-purple-400 text-transparent bg-clip-text">
              Lorem ipsum dolor sit amet
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-white/80 leading-relaxed">
              <p>
                Quisque condimentum vestibulum urna eget dapibus. In molestie,
                augue sed commodo tristique, sem lorem viverra ex, nec efficitur
                neque sapien ac nisl.
              </p>

              <p>
                Nam condimentum arcu vitae libero efficitur mattis. Fusce
                sodales sem quis nisi tincidunt, sit amet commodo nisi rhoncus.
              </p>

              <p>
                Etiam lacinia in dui et ultricies. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Morbi ac tincidunt arcu.
              </p>

              <p>
                Vestibulum non convallis enim, vel sollicitudin leo. Duis
                hendrerit eros vel elementum hendrerit.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
