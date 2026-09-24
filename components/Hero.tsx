export default function Hero() {
  return (
    <section className="py-20 md:py-28 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Remoto / Freelance — Disponibilidad Inmediata
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
          Samuel López
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-slate-300 mb-4">
          Desarrollador de Software · TradingView · Automatización · IA
        </p>
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Desarrollo indicadores de TradingView, aplicaciones web y herramientas de automatización orientadas a resolver problemas reales.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#trading-indicators"
            className="px-5 py-2.5 rounded-md bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-400 transition-colors"
          >
            Ver indicadores
          </a>
          <a
            href="#featured-software"
            className="px-5 py-2.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-medium text-sm hover:bg-slate-700 transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800 font-medium text-sm hover:text-white hover:border-slate-700 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}