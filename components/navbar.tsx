"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Logo } from "./ui/logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { LanguageSwitcher } from "./language-switcher";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Navbar");

  const menuItems = [
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("experience"), href: "#experience" },
    { name: t("contact"), href: "#contact" },
  ] as const;

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-background/50 fixed z-20 w-full backdrop-blur-3xl">
      <nav role="navigation" ref={menuRef}>
        <MaxWidthWrapper>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 border-b lg:gap-0 lg:py-4">
            {/* Logo */}
            <div className="relative z-20 flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Página inicial"
                className="flex items-center space-x-2"
              >
                <Logo />
                <span className="sr-only">Seu Site</span>
              </Link>

              {/* Menu Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                className="relative -mr-1 p-1 lg:hidden"
              >
                <Menu
                  className={`m-auto size-6 transition-all duration-200 ${
                    isMenuOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 transition-all duration-200 ${
                    isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>

            {/* Menu */}
            <div
              className={`w-full transition-all duration-200 lg:w-auto lg:flex lg:opacity-100 lg:scale-100 ${
                isMenuOpen
                  ? "block opacity-100 scale-100"
                  : "hidden opacity-0 scale-95 lg:block"
              }`}
            >
              <ul className="flex flex-col gap-6 text-base lg:flex-row lg:items-center lg:gap-8 lg:text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-muted-foreground hover:text-accent-foreground block transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center border-t border-zinc-700 pt-6 lg:mt-0 lg:border-none lg:pt-0 lg:ml-8">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
}
