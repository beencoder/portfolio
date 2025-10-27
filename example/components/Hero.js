export default function Hero() {
  return (
    <section className="py-20">
      <div className="container px-6 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Web Publisher</h1>
        <p className="mt-4 text-gray-600">
          접근성과 크로스브라우징에 강한 퍼블리싱 · 반응형 최적화
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/resume.pdf" className="rounded-xl border px-5 py-2">
            Resume
          </a>
          <a href="#projects" className="rounded-xl bg-gray-900 px-5 py-2 text-white">
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
