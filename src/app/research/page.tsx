export const metadata = {
  title: "研究",
  description: "可公度性预测、研报筛选、量化研究档案。",
};

const researchAreas = [
  {
    title: "可公度性预测",
    status: "进行中",
    desc: "基于翁文波院士可公度性理论，应用于股票价格转折点预测。已识别核心周期 ΔX=5（一级主周期）和 ΔX=29（独特长周期），持续跟踪验证。",
  },
  {
    title: "研报筛选系统",
    status: "日常运行",
    desc: "每日自动筛选17家头部券商研报，基于类型、行业、机构、标题四维度打分，重点关注 AI 算力、能源、半导体方向。",
  },
  {
    title: "公众号内容改造",
    status: "优化中",
    desc: "应对微信AI检测限流，三方案并行：AI辅助改写、降频提质、混合内容策略。定位宏观观察 + 财经故事。",
  },
];

export default function ResearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">
        研究
      </h1>
      <p className="text-sm text-zinc-500 mb-10">
        独立研究项目的归档与进展追踪。每一个项目都是独特的认知资产。
      </p>

      <div className="space-y-6">
        {researchAreas.map((area) => (
          <div
            key={area.title}
            className="border border-zinc-100 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-sm font-medium text-zinc-900">
                {area.title}
              </h2>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500">
                {area.status}
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
