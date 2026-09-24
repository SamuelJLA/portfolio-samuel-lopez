import { TECH_CATEGORIES } from '@/data/projects';

export default function TechStack() {
  return (
    <section className="py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-1 font-mono">Tecnologías</h2>
        <h3 className="text-2xl font-bold text-white mb-8">Stack & Tools</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-slate-900/40 border border-slate-800 p-5 rounded-lg">
              <h4 className="text-sm font-bold text-slate-200 mb-3 border-b border-slate-800 pb-2">{cat.title}</h4>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="text-amber-500">›</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}