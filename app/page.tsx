import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-4">
        {/* 磨砂玻璃效果卡片 */}
        <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          {/* 主标题 */}
          <h1 className="text-center text-6xl font-bold tracking-tighter md:text-8xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              7color.help
            </span>
          </h1>

          {/* 座右铭 */}
          <p className="mt-8 text-center text-xl text-slate-300 animate-pulse">
            不要等到厉害了才开始，只有开始了才会变得厉害。
          </p>

          {/* 技术栈展示 */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-slate-400">
            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
              Next.js 15
            </span>
            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
              DeepSeek
            </span>
            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
              M1 Pro
            </span>
          </div>

          {/* 交互按钮 */}
          <div className="mt-12 flex justify-center">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(99,102,241,0.5)]">
              同步到云端
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
