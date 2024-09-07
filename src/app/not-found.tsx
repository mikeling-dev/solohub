"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-background text-foreground p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Looks like you've ventured into uncharted territory.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg">
            <Link href="/">Return to Home Base</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
