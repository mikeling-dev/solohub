import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ideas">
              <AccordionTrigger>Ideas</AccordionTrigger>
              <AccordionContent>
                <div className="pl-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    We welcome ideas that:
                  </p>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Smoothen your workflow</li>
                    <li>Save time</li>
                    <li>Improve efficiency in your industry</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    We will pick an idea every month and build it for free. You
                    will also get profit sharing if your idea is chosen and
                    being monetized.
                  </p>

                  <Link
                    href="/ideas"
                    className="block text-sm font-medium underline"
                  >
                    Share an idea
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="whats-new">
              <AccordionTrigger>What's new</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground pl-4">
                  Stay tuned for updates!
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="about">
              <AccordionTrigger>About</AccordionTrigger>
              <AccordionContent>
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block text-sm font-medium">
                    What is SoloHub
                  </Link>
                  <Link href="/services" className="block text-sm font-medium">
                    Our Services
                  </Link>
                  <Link href="/tools" className="block text-sm font-medium">
                    Tools we developed
                  </Link>
                  <Link href="/join" className="block text-sm font-medium">
                    Join us
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button asChild onClick={onClose} className="w-full">
            <Link href="/get-started">Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
