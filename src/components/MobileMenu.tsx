import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

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
                <div className="pl-4 space-y-2">
                  <Link
                    href="/blog/10-tips-for-solo-entrepreneurs"
                    className="block text-sm font-medium "
                  >
                    10 Tips for Solo Entrepreneurs
                  </Link>
                  <Link
                    href="/blog/what-would-the-future-look-like-with-ai"
                    className="block text-sm font-medium"
                  >
                    What would the future look like with AI?
                  </Link>
                  <Link
                    href="/blog/financial-management-tips-for-startups"
                    className="block text-sm font-medium"
                  >
                    Financial Management Tips for Startups
                  </Link>
                  <Link
                    href="/blogs"
                    className="block text-sm font-medium underline"
                  >
                    View all
                  </Link>
                </div>
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
