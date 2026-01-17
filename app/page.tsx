import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-center px-4">
        <h1 className="text-7xl font-bold tracking-tighter text-white md:text-9xl">
          7color.help
        </h1>
        <a
          href="#"
          className="mt-16 flex h-16 w-48 items-center justify-center rounded-full bg-white text-xl font-semibold text-black transition-all duration-1000 hover:animate-pulse hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.7)]"
        >
          开始探索
        </a>
      </main>
    </div>
  );
}
