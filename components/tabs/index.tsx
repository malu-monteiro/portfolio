"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TabPortfolio } from "./portfolio";
import { TabAbout } from "./about";
import { TabContact } from "./contact";

const TABS = [
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export function Tabs() {
  const [activeTab, setActiveTab] =
    useState<(typeof TABS)[number]["id"]>("portfolio");

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center justify-center gap-2 rounded-xl bg-card p-1.5 shadow-sm">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex-1 rounded-lg px-6 py-2.5 text-sm font-medium transition-colors outline-none",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-lg bg-background shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="pt-2">
        {activeTab === "portfolio" && <TabPortfolio />}
        {activeTab === "about" && <TabAbout />}
        {activeTab === "contact" && <TabContact />}
      </div>
    </div>
  );
}
