"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import BlogPostGrid from "@/components/BlogPostGrid";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogPosts } from "@/data/blogPosts";
// Mock data for categories and blog posts
const categories = [
  "All",
  "Product Updates",
  "Entrepreneurship",
  "Marketing",
  "Finance",
  "Productivity",
];

const POSTS_PER_PAGE = 6;

export default function WhatsNewPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter((post) => {
    const searchFields = [
      post.title,
      ...post.category,
      post.excerpt,
      //   post.content,
    ].map((field) => field.toLowerCase());

    return (
      (selectedCategory === "All" ||
        post.category.includes(selectedCategory)) &&
      searchFields.some((field) => field.includes(searchTerm.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background text-foreground p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">What&apos;s New</h1>
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
            <BlogPostGrid posts={paginatedPosts} />
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
