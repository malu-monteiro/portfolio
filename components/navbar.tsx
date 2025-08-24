"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Logo } from "./ui/logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { LanguageSwitcher } from "./language-switcher";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  const menuItems = [
    { name: t("home"), href: "#home" },
    { name: t("about"), href: "#about" },
    { name: t("projects"), href: "#projects" },
    { name: t("experience"), href: "#experience" },
    { name: t("contact"), href: "#contact" },
  ] as const;

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-background/50 fixed z-20 w-full backdrop-blur-3xl">
      <nav>
        <MaxWidthWrapper>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 border-b lg:gap-0 lg:py-4">
            {/* Seção Esquerda: Logo */}
            <div className="relative z-20 flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              {/* Botão do Menu Mobile */}
              <button
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                className="relative -mr-1 p-1 lg:hidden"
              >
                <Menu
                  className={`m-auto size-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90 scale-0 opacity-0" : ""
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 transition-transform duration-300 ${
                    isMenuOpen ? "" : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>

            {/* Seção Direita: Itens do Menu (Desktop e Mobile) */}
            <div
              className={`w-full lg:w-auto lg:flex ${
                isMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col gap-6 text-base lg:flex-row lg:items-center lg:gap-8 lg:text-sm">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-muted-foreground hover:text-accent-foreground block duration-200 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Divisor e Seletor de Idioma */}
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
