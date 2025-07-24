import Image from "next/image";

interface PinkBackgroundProps {
  opacity?: number;
  quality?: number;
}

export function PinkBackground({
  opacity = 90,
  quality = 85,
}: PinkBackgroundProps) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/PinkBackground.png"
        alt=""
        fill
        className={`object-cover object-center opacity-${opacity} [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]`}
        priority
        quality={quality}
      />
    </div>
  );
}
