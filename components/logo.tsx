import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.svg"
      alt="Logo"
      width={34}
      height={34}
      className={className}
      priority
    />
  );
};
