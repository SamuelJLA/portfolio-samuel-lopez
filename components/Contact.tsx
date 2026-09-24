export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Bloque Sobre Mí / Perfil */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Perfil
          </span>
          <h2 className="text-2xl font-bold text-white mt-1 mb-4">Sobre mí</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Soy un desarrollador autodidacta con experiencia profesional en IT y experiencia práctica construyendo aplicaciones web, automatizaciones e indicadores para TradingView. Mi enfoque se basa en investigar, aprender rápidamente, construir soluciones funcionales y utilizar herramientas modernas para acelerar el desarrollo.
          </p>
        </div>

        {/* Footer Minimalista */}
        <div className="text-xs text-slate-600 border-t border-slate-900 pt-8">
          © {new Date().getFullYear()} Samuel López. Desarrollado con Next.js y Tailwind CSS.
        </div>
      </div>
    </section>
  );
}