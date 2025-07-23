"use client";

import { useState, useCallback } from "react";

import Link from "next/link";

import { Logo } from "./ui/logo";
import { MaxWidthWrapper } from "./max-width-wrapper";

import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Qualifications", href: "#qualifications" },
  { name: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-background/50 fixed z-20 w-full backdrop-blur-3xl">
      <nav data-state={isMenuOpen ? "active" : ""}>
        <MaxWidthWrapper className="transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 border-b lg:gap-0 lg:py-4">
            {/* MaxWidthWrapper Logo + Nav Desktop + Mobile Button */}
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              >
                <Menu
                  className={`m-auto size-6 duration-200 ${
                    isMenuOpen ? "rotate-180 scale-0 opacity-0" : ""
                  }`}
                />
                <X
                  className={`absolute inset-0 m-auto size-6 duration-200 ${
                    isMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  }`}
                />
              </button>

              {/* Navigation Desktop */}
              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-200 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Mobile */}
            <div
              className={`bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none ${
                isMenuOpen ? "block lg:flex" : "hidden lg:flex"
              }`}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
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
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
}
