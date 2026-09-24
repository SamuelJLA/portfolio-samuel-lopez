import { EXPERIENCE } from '@/data/projects';

export default function Experience() {
  return (
    <section className="py-16 border-b border-slate-800/60 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Experiencia Profesional
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Experiencia & Operaciones IT
          </h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.role}
              className="bg-slate-900/60 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-sm font-medium text-amber-400 font-mono mt-0.5">{exp.company}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                    Responsabilidades Principales
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">›</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                    Impacto Operativo
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">›</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}