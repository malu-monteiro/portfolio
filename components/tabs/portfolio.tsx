"use client";

import { Fragment } from "react";

import { DesktopCard } from "../ListSection/desktop-card";
import { MobileCard } from "../ListSection/mobile-card";

const projects = [
  {
    title: "NFT",
    description: "nft, mobile, ui design",
    date: "2342",
    detail: {
      image: "/",
      link: "#",
      linkLabel: "View Project",
    },
  },
  {
    title: "Concept",
    description: "mobile, ui design",
    date: "2432",
    detail: {
      image: "/",
      link: "#",
      linkLabel: "View Project",
    },
  },
  {
    title: "Food App",
    description: "mobile, react native, ui design",
    date: "4233",
    detail: {
      image: "/",
      link: "#",
      linkLabel: "View Project",
    },
  },
];

export function TabPortfolio() {
  return (
    <div className="flex flex-col gap-6 md:gap-1">
      {projects.map((item) => (
        <Fragment key={item.title}>
          <DesktopCard item={item} className="hidden md:flex" />
          <MobileCard item={item} className="flex md:hidden" />
        </Fragment>
      ))}
    </div>
  );
}
