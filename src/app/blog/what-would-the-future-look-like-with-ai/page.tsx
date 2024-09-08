import Image from "next/image";
import { blogPosts } from "@/data/blogPosts"; // Ensure this path is correct

export default function BlogPost({ params }: { params: { id: string } }) {
  // const post = blogPosts.find((p) => p.id.toString() === params.id);
  const post = blogPosts.find((p) => p.id === 2);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="mb-2">
            <span className="text-sm text-gray-300">
              {post.category.join(", ")}
            </span>
          </div>
          <p className="text-lg text-white mb-8">{post.excerpt}</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <div className="prose max-w-none">
          <p>Finance</p>
        </div>
      </div>
    </div>
  );
}
