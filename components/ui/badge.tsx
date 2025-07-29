import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "status";
}

export function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const indicator =
    variant === "status" ? (
      <span className="relative flex h-2 w-2">
        <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative block h-2 w-2 rounded-full bg-green-400" />
      </span>
    ) : (
      <span className="h-2 w-2 rounded-full bg-purple-100" />
    );

  return (
    <div
      className={`inline-flex items-center gap-x-2 rounded-lg border px-3 py-1 text-sm font-medium ${className}`}
    >
      {indicator}
      <span className="font-mono">{children}</span>
    </div>
  );
}
