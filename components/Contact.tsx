import { SOCIAL_LINKS } from '@/data/projects';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Bloque Sobre Mí */}
        <div className="mb-16 border-b border-slate-800/80 pb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">Perfil</span>
          <h2 className="text-2xl font-bold text-white mt-1 mb-4">Sobre mí</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
            Soy un desarrollador autodidacta con experiencia profesional en IT y experiencia práctica construyendo aplicaciones web, automatizaciones e indicadores para TradingView. Mi enfoque se basa en investigar, aprender rápidamente, construir soluciones funcionales y utilizar herramientas modernas para acelerar el desarrollo.
          </p>
        </div>

        {/* Bloque Contacto */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Contacto</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
            Disponible para proyectos remotos y colaboraciones freelance.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-slate-900 border border-slate-800 p-4 rounded-lg mb-12">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="px-4 py-2 bg-amber-500 text-slate-950 font-semibold text-xs rounded hover:bg-amber-400 transition-colors"
            >
              Enviar Correo
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-200 text-xs rounded hover:bg-slate-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.tradingview}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-200 text-xs rounded hover:bg-slate-700 transition-colors"
            >
              TradingView
            </a>
          </div>

          <div className="text-xs text-slate-600 border-t border-slate-900 pt-8">
            © {new Date().getFullYear()} Samuel López. Desarrollado con Next.js y Tailwind CSS.
          </div>
        </div>

      </div>
    </section>
  );
}