import { EXPERIENCE } from '@/data/projects';

export default function Experience() {
  return (
    <section className="py-16 border-b border-slate-800 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Label de la sección con contraste mejorado */}
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-500/90 mb-1">
          Professional Background
        </h2>
        
        {/* Título principal accesible y claro */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-8">
          IT Experience & Operations
        </h3>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/90 border border-slate-800 rounded-lg p-6 sm:p-7 shadow-sm hover:border-slate-700/80 transition-colors"
            >
              {/* Header de la tarjeta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-slate-800/80 gap-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-100 tracking-tight">{exp.role}</h4>
                  <span className="text-xs font-mono font-medium text-amber-400/90 mt-0.5 block">{exp.company}</span>
                </div>
                <span className="text-xs font-mono font-medium text-slate-300 bg-slate-800/90 border border-slate-700/60 px-3 py-1 rounded w-fit self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              {/* Grid de 2 columnas refinado en spacing y contraste */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-sm">
                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2 text-slate-300 leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 select-none mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                    Operational Impact
                  </h5>
                  <ul className="space-y-2 text-slate-300 leading-relaxed">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-500 select-none mt-0.5">•</span>
                        <span>{item}</span>
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