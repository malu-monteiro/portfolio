import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  projectLink?: string | null;
  buttonText: string;
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  projectLink,
  buttonText,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-lg border border-zinc-700 bg-zinc-900 p-8 shadow-lg animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-gray-400 transition-colors hover:text-white"
          aria-label="Fechar Modal"
        >
          ×
        </button>

        <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>

        <p className="mb-6 leading-relaxed text-gray-300">{description}</p>

        {projectLink && (
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">{buttonText}</Button>
          </a>
        )}
      </div>
    </div>
  );
}
