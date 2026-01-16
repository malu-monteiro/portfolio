import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandGitlab,
  TbBrandLeetcode,
  TbBrandWhatsapp,
  TbMail,
  TbDownload,
  TbSun,
  TbWorld,
  TbMoon,
} from "react-icons/tb";

import { cn } from "@/lib/utils";

const PROFILE = {
  name: "John Doe",
  role: "Lorem Ipsum",
  avatar: "/add-minha-ft.png",
  initials: "JD",
};

const STATS = [
  { label: "Lorem Ipsum", value: "0+" },
  { label: "Lorem Ipsum", value: "0+" },
  { label: "Lorem Ipsum", value: "0+" },
];

const SOCIALS = [
  { href: "#", label: "GitHub", icon: TbBrandGithub },
  { href: "#", label: "LinkedIn", icon: TbBrandLinkedin },
  { href: "#", label: "GitLab", icon: TbBrandGitlab },
  { href: "#", label: "LeetCode", icon: TbBrandLeetcode },
];

const CONTACTS = [
  {
    label: "Download CV",
    icon: TbDownload,
    variant: "default",
    className: "sm:flex-1",
    showLabel: true,
  },
  {
    label: "E-mail",
    icon: TbMail,
    variant: "outline",
    className: "",
    showLabel: false,
  },
  {
    label: "Mensagem",
    icon: TbBrandWhatsapp,
    variant: "outline",
    className: "",
    showLabel: false,
  },
] as const;

export function Header() {
  return (
    <header className="flex flex-col gap-6">
      <div className="flex items-center justify-end gap-4 pb-2">
        <div className="flex items-center gap-1">
          <TbWorld className="size-4 text-muted-foreground" />
          <Select defaultValue="pt">
            <SelectTrigger className="h-8 w-fit border-none bg-transparent p-0 focus:ring-0 shadow-none">
              <SelectValue placeholder="PT" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              side="bottom"
              sideOffset={4}
              align="end"
              className="min-w-20"
            >
              <SelectItem value="pt">PT</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <TbSun className="size-4 text-muted-foreground" />
          <Switch className="scale-90" />
          <TbMoon className="size-4 text-muted-foreground" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Avatar className="size-24 border-4 border-primary">
          <AvatarImage src={PROFILE.avatar} alt={PROFILE.name} />
          <AvatarFallback className="text-2xl">
            {PROFILE.initials}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            {PROFILE.name}
          </h1>
          <p className="text-lg text-muted-foreground">{PROFILE.role}</p>

          <div className="flex items-center gap-4 pt-2">
            {SOCIALS.map((social) => (
              <Tooltip key={social.label} content={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </a>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center sm:gap-8">
        {STATS.map((stat, i) => (
          <div key={i} className="space-y-1">
            <p className="text-2xl font-normal text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        {CONTACTS.map((action, i) => (
          <Button
            key={i}
            variant={action.variant}
            size="lg"
            className={cn("gap-2", action.className)}
          >
            <action.icon className="size-5" />
            {action.showLabel && action.label}
          </Button>
        ))}
      </div>
    </header>
  );
}
