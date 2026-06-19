import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/blog", label: "文章" },
  { href: "/research", label: "研究" },
  { href: "/tools", label: "工具" },
  { href: "/about", label: "关于" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          新知老刘
        </Link>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
