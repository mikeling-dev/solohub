"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ToggleMode";
import { MobileMenu } from "./MobileMenu";
import { useState } from "react";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-6 bg-background"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/"
        className="text-2xl font-bold text-foreground hover:cursor-pointer"
      >
        SoloHub
      </Link>
      <div className="hidden md:flex space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/ideas" className="flex items-center gap-1">
            Ideas <Sparkles className="h-4" />
          </Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/blog">What's new</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button>
        <Button asChild>
          <Link href="/get-started">Get Started</Link>
        </Button>
      </div>
      <div className="hidden md:block">
        <ModeToggle />
      </div>
      <div className="md:hidden flex items-center">
        <ModeToggle />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.nav>
  );
}
