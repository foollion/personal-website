import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "文章",
  description: "财经独立研究、宏观观察、投资方法论。",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
        文章
      </h1>
      <p className="text-sm text-zinc-500 mb-10">
        财经研究、宏观观察、独立评论。每篇文章都是一个长期资产。
      </p>

      {posts.length === 0 ? (
        <p className="text-sm text-zinc-400">即将发布第一篇文章。</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-base font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="text-xs text-zinc-400 mt-2">{post.date}</p>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
