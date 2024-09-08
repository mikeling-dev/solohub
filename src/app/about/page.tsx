"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8">
      <motion.div
        className="max-w-4xl mx-auto space-y-24" // Increased from space-y-16 to space-y-24
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.section variants={sectionVariants} className="py-8">
          <h2 className="text-3xl font-bold mb-6">What is SoloHub?</h2>
          <p className="text-lg text-muted-foreground">
            SoloHub is an all-in-one platform designed to empower solo
            entrepreneurs. We provide tools, resources, and a supportive
            community to help you turn your ideas into successful businesses,
            efficiently and effectively.
          </p>
        </motion.section>

        <motion.section variants={sectionVariants} className="py-8">
          <h2 className="text-3xl font-bold mb-6">Who are we?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold">Chris Ling</h3>
              <p className="text-muted-foreground">Tech Intern</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A full stack software engineer who has built impressive
                softwares for various great software companies, bringing a
                wealth of technical expertise to SoloHub.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mike Ling</h3>
              <p className="text-muted-foreground">Biz Intern</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A business consultant who has studied small businesses for
                years. He has helped hundreds of businesses from different
                industries find resources and solutions to grow more
                efficiently.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={sectionVariants} className="py-8">
          <h2 className="text-3xl font-bold mb-6">Mission and Vision</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Our mission is to democratize entrepreneurship by providing solo
            entrepreneurs with the tools and support they need to succeed.
          </p>
          <p className="text-lg text-muted-foreground">
            We envision a world where anyone with a great idea can build a
            thriving business, regardless of their background or resources.
          </p>
        </motion.section>

        <motion.section variants={sectionVariants} className="py-8">
          <h2 className="text-3xl font-bold mb-6">Share Your Ideas With Us</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We believe in the power of collaboration. Your ideas could be the
            next big thing that transforms the entrepreneurial landscape.
          </p>
          <Button asChild size="lg">
            <Link href="/ideas">Share Your Idea</Link>
          </Button>
        </motion.section>

        <motion.section variants={sectionVariants} className="py-8">
          <h2 className="text-3xl font-bold mb-6">Join Us</h2>
          <p className="text-lg text-muted-foreground">
            We're always looking for passionate individuals to join our team.
            Check back soon for open positions!
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
}
