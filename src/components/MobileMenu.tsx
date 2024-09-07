import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-8">
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="/ideas" className="flex items-center gap-1">
              Ideas <Sparkles className="h-4" />
            </Link>
          </Button>
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="/blog">What's new</Link>
          </Button>
          <Button variant="ghost" asChild onClick={onClose}>
            <Link href="/about">About</Link>
          </Button>
          <Button asChild onClick={onClose}>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
