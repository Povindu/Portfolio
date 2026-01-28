import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { ModeToggle } from "@/components/ModeToggle";
import type { Profile } from "@/lib/sanity";

interface Props {
  profile?: Profile | null;
}

export const Navbar = ({ profile }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const resumeHref = profile?.resumeURL ?? "/resume.pdf";

  const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "Resume", href: resumeHref },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 shadow-sm bg-background/85 backdrop-blur-md border-b border-border`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground flex items-center p-1 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
        >
          <img src="/favicon.ico" alt="Povindu" className="w-8 h-8" />
          {/* <span className="bg-zinc-800 hover:bg-zinc-700 transition-colors text-white px-2 py-1 rounded-r-md text-base font-geist font-normal uppercase">
            Povindu
          </span> */}
        </a>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-geist">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="flex items-center gap-2 ml-4 border-l pl-4 border-border">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Povindu"
                target="_blank"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/pcsamarasekara/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </Button>
            <ModeToggle />
          </div>
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-border bg-background/80 shadow-sm"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="text-zinc-900 dark:text-zinc-50 bg-white dark:bg-zinc-950 border-l border-border px-6 py-10"
              aria-describedby={undefined}
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex h-full flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <hr className="border-border" />
                {profile?.resumeURL && (
                  <Button
                    className="w-full text-zinc-900 dark:text-zinc-50 bg-white border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-950"
                    asChild
                  >
                    <a
                      href={profile.resumeURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </Button>
                )}

                <div className="flex items-center justify-center gap-4 mt-4">
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://github.com/Povindu"
                      target="_blank"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href="https://www.linkedin.com/in/pcsamarasekara/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                  </Button>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
