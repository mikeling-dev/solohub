"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import BlogPostGrid from "@/components/BlogPostGrid";

// Mock data for categories and blog posts
const categories = [
  "All",
  "Product Updates",
  "Entrepreneurship",
  "Marketing",
  "Finance",
  "Productivity",
];

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Solo Entrepreneurs",
    category: "Entrepreneurship",
    image: "/images/blog/entrepreneur.jpg",
    excerpt:
      "Learn how to thrive as a solo entrepreneur with these essential tips.",
  },
  // Add more mock blog posts here
];

export default function WhatsNewPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">What's New</h1>
        <SearchBar onSearch={setSearchTerm} />
        <div className="flex flex-col md:flex-row mt-8 gap-8">
          <div className="w-full md:w-1/4">
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          <div className="w-full md:w-3/4">
            <BlogPostGrid posts={filteredPosts} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
