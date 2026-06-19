export const metadata = {
  title: "关于",
  description: "新知老刘：财经独立研究者、AI工具实践者。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
        关于
      </h1>
      <p className="text-sm text-zinc-500 mb-10">
        以下是我的数字身份与产出。
      </p>

      <div className="space-y-8 text-sm leading-relaxed text-zinc-600">
        <section>
          <h2 className="text-base font-medium text-zinc-900 mb-2">我是谁</h2>
          <p>
            新知老刘，财经独立研究者，AI 工具实践者。关注宏观观察、独立评论与财经故事叙事。
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-zinc-900 mb-2">
            我的产出
          </h2>
          <ul className="space-y-2 text-zinc-500">
            <li>
              · 公众号「新知小站读研报」—— 宏观观察 + 财经故事
            </li>
            <li>· 知乎「新知老刘」—— 财经问答与想法</li>
            <li>
              · 本网站 —— 个人智能资产库，文章、研究、工具的总枢纽
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-medium text-zinc-900 mb-2">
            三大目标
          </h2>
          <p>财富自由、文学创作、AI 技能精进。</p>
        </section>

        <section>
          <h2 className="text-base font-medium text-zinc-900 mb-2">
            本站原则
          </h2>
          <ul className="space-y-1 text-zinc-500">
            <li>· 每篇文章都是一个长期资产</li>
            <li>· 每次研究都可被未来的自己检索</li>
            <li>· 每个工具都可复用和迭代</li>
            <li>· 内容不构成投资建议</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
