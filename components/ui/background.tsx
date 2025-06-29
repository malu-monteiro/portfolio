import ParticleBackground from "./particles-background";

export default function Background() {
  return (
    <>
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>

      <div
        className="absolute inset-0 z-10 transform bg-[url('/PinkBackground.png')] bg-cover bg-center [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]"
        aria-hidden="true"
      />
    </>
  );
}
