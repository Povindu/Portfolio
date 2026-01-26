import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, FileText } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <a
            href="/"
            className="text-xl font-bold tracking-tighter text-zinc-900 flex items-center gap-2"
          >
            <span className="bg-zinc-900 text-white px-2 py-1 rounded-md text-sm">
              DEV
            </span>
            <span>Povindu.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-2 ml-4 border-l pl-4 border-zinc-200">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
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
                      className="text-lg font-medium text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <hr className="border-zinc-100" />
                  <Button className="w-full">Download Resume</Button>
                  <div className="flex justify-center gap-4 mt-4">
                    <Github className="w-5 h-5 text-zinc-500" />
                    <Linkedin className="w-5 h-5 text-zinc-500" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
};
