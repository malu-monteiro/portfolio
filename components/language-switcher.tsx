"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const languages = [
  { code: "en", name: "English", flagCode: "us" },
  { code: "pt-BR", name: "Português", flagCode: "br" },
] as const;

export function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  const onSelectLanguage = (locale: string) => {
    Cookies.set("NEXT_LOCALE", locale, { expires: 365 });
    setIsOpen(false);
    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-32" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors w-full justify-center"
      >
        <span
          className={`fi fi-${currentLanguage?.flagCode} inline-block w-4 h-4`}
        ></span>
        <span>{currentLanguage?.name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-full bg-zinc-800 border border-zinc-700 rounded-md shadow-lg z-30">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => onSelectLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
                    currentLocale !== lang.code
                      ? "hover:bg-zinc-700 opacity-100"
                      : "opacity-50"
                  }`}
                  disabled={currentLocale === lang.code}
                >
                  <span
                    className={`fi fi-${lang.flagCode} inline-block w-4 h-4`}
                  ></span>
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
