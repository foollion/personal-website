export const metadata = {
  title: "工具",
  description: "AI Skills、自动化流水线、Prompt 工程。",
};

const tools = [
  {
    name: "研报筛选自动化",
    desc: "每日定时调用东方财富 API，筛选17家券商研报，按四维度打分。WorkBuddy 自动化任务，结果推送到微信。",
    status: "运行中",
  },
  {
    name: "每日财经简报",
    desc: "每天早上 7:00 自动执行：全球财经新闻筛选 + 待办整理 + 知乎选题建议。",
    status: "运行中",
  },
  {
    name: "可公度性计算器",
    desc: "基于翁文波理论的时间序列预测工具。输入价格序列，输出核心周期、可公度式、外推预测。",
    status: "开发中",
  },
  {
    name: "情绪管理小程序",
    desc: "ICP 备案已通过，代码就绪，待认证后上线。",
    status: "待上线",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
        工具
      </h1>
      <p className="text-sm text-zinc-500 mb-10">
        AI 辅助构建的工具与自动化流水线。可复用、可迭代、可交付。
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border border-zinc-100 rounded-lg p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium text-zinc-900">
                {tool.name}
              </h2>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  tool.status === "运行中"
                    ? "bg-green-50 text-green-600"
                    : tool.status === "开发中"
                    ? "bg-amber-50 text-amber-600"
                    : "bg-zinc-100 text-zinc-400"
                }`}
              >
                {tool.status}
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
