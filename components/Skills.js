const skills = [
  { name: 'HTML', desc: 'Semantic markup', icon: '/images/skill-html.svg' },
  { name: 'CSS', desc: 'Responsive layouts', icon: '/images/skill-css.svg' },
  { name: 'JavaScript', desc: 'ES6+ / DOM', icon: '/images/skill-js.svg' },
  { name: 'React', desc: 'Component-based UI', icon: '/images/skill-react.svg' },
  { name: 'Next.js', desc: 'SSR/SSG optimization', icon: '/images/skill-next.svg' },
  { name: 'Figma', desc: 'UI collaboration', icon: '/images/skill-figma.svg' },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">Skills & Tools</h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.name}
              className="transform rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              title={s.desc}
            >
              <div className="flex items-center gap-3">
                <img src={s.icon} alt="" className="h-8 w-8" />
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
