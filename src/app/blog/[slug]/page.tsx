import { getPost, getPosts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors mb-8 inline-block"
      >
        ← 返回文章列表
      </Link>

      <header className="mb-10">
        <h1 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <time>{post.date}</time>
          {post.category && (
            <>
              <span className="text-zinc-200">|</span>
              <span>{post.category}</span>
            </>
          )}
        </div>
      </header>

      <article dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mt-16 pt-8 border-t border-zinc-100">
        <p className="text-xs text-zinc-400">
          本文内容仅供研究参考，不构成任何投资建议。
        </p>
      </div>
    </div>
  );
}
