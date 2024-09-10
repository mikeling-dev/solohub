type BlogPost = {
  id: number;
  title: string;
  category: string[];
  image: string;
  excerpt: string;
  url: string;
};

export const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Solo Entrepreneurs",
    category: ["Entrepreneurship"],
    image: "/assets/blogs/soloman.jpeg",
    excerpt:
      "Learn how to thrive as a solo entrepreneur with these essential tips.",
    url: "10-tips-for-solo-entrepreneurs",
  },
  {
    id: 2,
    title: "What would future businesses look like with AI?",
    category: ["Entrepreneurship"],
    image: "/assets/blogs/futuristic-natural-city-.jpeg",
    url: "what-would-future-businesses-look-like-with-ai",
    excerpt:
      "Dive into a world where AI reshapes the landscape for entrepreneurs, startups, and freelancers.",
  },
  {
    id: 3,
    title: "Are you spending too much time on your bookkeeping?",
    category: ["Entrepreneurship", "Finance", "Productivity"],
    image: "/assets/blogs/accountant.jpg",
    url: "financial-management-tips-for-startups",
    excerpt:
      "Discover how A.I is revolutionizing financial management for startups",
  },
  {
    id: 4,
    title: "6 Tips To Improve Productivity In Startups",
    category: ["Entrepreneurship", "Productivity"],
    image: "/assets/blogs/financial-analysis.jpg",
    url: "6-tips-to-improve-productivity-in-startups",
    excerpt:
      "Unlock the power of artificial intelligence to supercharge your startup's productivity.",
  },
  // Add more mock blog posts here
];
