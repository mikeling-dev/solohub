import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  category: string[];
  image: string;
  excerpt: string;
  url: string;
}

interface BlogPostGridProps {
  posts: BlogPost[];
}

export default function BlogPostGrid({ posts }: BlogPostGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link href={`/blog/${post.url}`} key={post.id}>
          <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow dark:bg-secondary">
            <div className="relative h-64">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {post.category.join(", ")} {/* Add comma between categories */}
              </p>
              <p className="text-sm">{post.excerpt}</p>
            </CardContent>
          </div>
        </Link>
      ))}
    </div>
  );
}
