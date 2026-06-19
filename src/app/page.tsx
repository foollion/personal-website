import Link from "next/link";

const assetCards = [
  {
    title: "财经研究",
    desc: "宏观观察、研报筛选、独立评论。",
    href: "/blog",
    color: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    title: "可公度性预测",
    desc: "翁文波方法论应用于股价转折点预测。",
    href: "/research",
    color: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    title: "AI 工具集",
    desc: "Skills、Prompt 工程、自动化流水线。",
    href: "/tools",
    color: "bg-green-50 text-green-700 border-green-100",
  },
  {
    title: "个人品牌",
    desc: "公众号「新知小站读研报」、知乎「新知老刘」。",
    href: "/about",
    color: "bg-amber-50 text-amber-700 border-amber-100",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">
          个人智能资产库
        </h1>
        <p className="text-base text-zinc-500 leading-relaxed max-w-xl">
          在 AI 时代，将每一次研究、每一篇文章、每一个工具，沉淀为可检索、可复用、可增值的数字不动产。不为平台打工，为自己积累长尾价值。
        </p>
      </section>

      {/* Asset Cards */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {assetCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`block p-6 rounded-lg border ${card.color} transition-all hover:scale-[1.02]`}
            >
              <h2 className="text-sm font-medium mb-1">{card.title}</h2>
              <p className="text-xs opacity-80">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 最新 */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <h2 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wide">
          最新文章
        </h2>
        <div className="space-y-4">
          <Link
            href="/blog/ai-smart-assets"
            className="block group"
          >
            <p className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
              AI 时代的个人智能资产：为什么你需要一个自己的网站
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              2026年5月25日 · 数字不动产
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
