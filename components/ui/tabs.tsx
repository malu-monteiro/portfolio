"use client";

import * as React from "react";

import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabListProps as AriaTabListProps,
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
  TabProps as AriaTabProps,
  Tabs as AriaTabs,
  TabsProps as AriaTabsProps,
  composeRenderProps,
} from "react-aria-components";

import { cn } from "../../lib/utils";

function Tabs({ className, ...props }: AriaTabsProps) {
  return (
    <AriaTabs
      className={composeRenderProps(className, (className) =>
        cn(
          "group flex flex-col gap-2" /* Orientation */,
          "data-[orientation=vertical]:flex-row",

          className
        )
      )}
      {...props}
    />
  );
}

const TabList = <T extends object>({
  className,

  ...props
}: AriaTabListProps<T>) => (
  <AriaTabList
    className={composeRenderProps(className, (className) =>
      cn(
        "inline-flex h-auto items-center justify-center rounded-md p-1",
        "bg-white/10",
        "backdrop-blur-sm",
        "border border-white/20",
        "text-neutral-300",
        "data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col",

        className
      )
    )}
    {...props}
  />
);

const Tab = ({ className, ...props }: AriaTabProps) => (
  <AriaTab
    className={composeRenderProps(className, (className) =>
      cn(
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all",
        "outline-none disabled:pointer-events-none disabled:opacity-50",
        "data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        "hover:text-white",
        "data-[selected]:bg-primary",
        "data-[selected]:text-primary-foreground",
        "data-[selected]:shadow-md",
        className
      )
    )}
    {...props}
  />
);

const TabPanel = ({ className, ...props }: AriaTabPanelProps) => (
  <AriaTabPanel
    className={composeRenderProps(className, (className) =>
      cn(
        "mt-2 ring-offset-background" /* Focus Visible */,
        "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        className
      )
    )}
    {...props}
  />
);

export { Tabs, TabList, TabPanel, Tab };
