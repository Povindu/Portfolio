import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { ModeToggle } from "@/components/ModeToggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "/resume.pdf" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 shadow-sm bg-background/85 backdrop-blur-md border-b border-border`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2 p-1 rounded-md"
        >
          <span className="bg-zinc-800 hover:bg-zinc-900 transition-colors text-white px-2 py-1 rounded-md text-base">
            Povindu
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
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

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-zinc-200 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <hr className="border-zinc-100" />
                <Button className="w-full">Download Resume</Button>
                <div className="flex justify-center gap-4 mt-4">
                  <GithubIcon className="w-5 h-5 text-zinc-500" />
                  <LinkedinIcon className="w-5 h-5 text-zinc-500" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
