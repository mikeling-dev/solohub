"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ToggleMode";
import { MobileMenu } from "./MobileMenu";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { blogPosts } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";

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
      <div className="hidden md:flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ideas</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/ideas">
                  <div className="p-4 md:w-[400px] lg:w-[500px]">
                    <div className="flex flex-row w-full gap-2">
                      <h3 className="text-lg font-semibold mb-2 ">
                        Share your ideas
                      </h3>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      We welcome all ideas that:
                    </p>
                    <ul className="list-disc pl-5 mb-4 text-sm">
                      <li>Smoothen your workflow</li>
                      <li>Save time</li>
                      <li>Improve efficiency in your industry</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      We will pick an idea every month and build it for free.
                      You will also share the profit if your idea is chosen and
                      being monetized.
                    </p>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>What's new</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {blogPosts.map((blog) => (
                    <ListItem
                      key={blog.id}
                      title={blog.title}
                      href={`/blog/${blog.url}`}
                    >
                      {blog.excerpt}
                    </ListItem>
                  ))}
                </ul>
                <Link
                  href="/blogs"
                  className="p-2 m-4 mt-0 flex align-middle items-center justify-center hover:bg-accent hover:text-accent-foreground rounded-sm"
                >
                  View all
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          SoloHub
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn about our mission and vision
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/services"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Our Services
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          See what you can achieve with our services
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/tools"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Tools we developed
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our suite of productivity tools
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/join"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Join us
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Become part of our growing community
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
