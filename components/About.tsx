export default function About() {
  return (
    <section id="about" className="py-16 border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-3">Sobre Mí</h2>
        <h3 className="text-2xl font-bold text-white mb-6">Desarrollo Práctico y Resolución de Problemas</h3>
        <div className="grid md:grid-cols-2 gap-8 text-slate-300 leading-relaxed text-sm sm:text-base">
          <div className="space-y-4">
            <p>
              Soy un desarrollador autodidacta con experiencia práctica construyendo aplicaciones web, herramientas de software, automatizaciones e indicadores personalizados para TradingView.
            </p>
            <p>
              Mi principal fortaleza es la capacidad para investigar problemas complejos, comprender sistemas existentes, aprender rápidamente nuevas tecnologías y convertir requerimientos técnicos en soluciones funcionales y confiables.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              Mi trayectoria en Operaciones y Supervisión IT complementa mi flujo de desarrollo de software, dándome una comprensión clara de la estabilidad de los sistemas, la optimización de procesos y la eficiencia en la ejecución.
            </p>
            <p className="text-slate-400 text-sm border-l-2 border-amber-500/40 pl-4 py-1">
              Ubicación: Caracas, Venezuela · Disponibilidad remota para proyectos basados en entregables y horarios flexibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}