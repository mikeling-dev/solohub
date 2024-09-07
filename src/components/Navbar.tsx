"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ToggleMode";

export function NavBar() {
  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-6 bg-background"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/"
        className="text-2xl font-bold text-foreground hover:cursor"
      >
        SoloHub
      </Link>
      <div className="space-x-4">
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
      <ModeToggle />
    </motion.nav>
  );
}
