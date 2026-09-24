import { TRADING_INDICATORS } from '@/data/projects';

export default function TradingIndicators() {
  return (
    <section id="trading-indicators" className="py-16 border-b border-slate-800/60 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">Pine Script</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Indicadores & Herramientas de Trading</h2>
          <p className="text-slate-400 text-sm mt-2 max-w-2xl">
            Implementaciones y herramientas desarrolladas en Pine Script para TradingView.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TRADING_INDICATORS.map((indicator) => (
            <div
              key={indicator.id}
              className="bg-slate-900/90 border border-amber-500/20 rounded-lg p-6 hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="aspect-video bg-slate-950 rounded border border-slate-800 mb-4 flex items-center justify-center text-slate-600 text-xs font-mono">
                  [ Screenshot / Demo: {indicator.title} ]
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{indicator.title}</h3>
                {indicator.subtitle && (
                  <p className="text-xs font-mono text-amber-400/90 mb-3">{indicator.subtitle}</p>
                )}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{indicator.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {indicator.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-xs pt-3 border-t border-slate-800">
                  <a
                    href={indicator.tradingViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                  >
                    TradingView →
                  </a>
                  <a
                    href={indicator.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    GitHub Code →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}