import { FEATURED_SOFTWARE } from '@/data/projects';
import DemoAccess from './DemoAccess';

export default function FeaturedSoftware() {
  return (
    <section id="featured-software" className="py-16 border-b border-slate-800/60 bg-slate-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">Proyecto Principal</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Software Projects</h2>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-block px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
                Trading & Analítica
              </div>
              <h3 className="text-2xl font-bold text-white">{FEATURED_SOFTWARE.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {FEATURED_SOFTWARE.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {FEATURED_SOFTWARE.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {FEATURED_SOFTWARE.demoCredentials && (
                <DemoAccess
                  email={FEATURED_SOFTWARE.demoCredentials.email}
                  passwordPlaceholder={FEATURED_SOFTWARE.demoCredentials.passwordPlaceholder}
                />
              )}

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={FEATURED_SOFTWARE.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-amber-500 text-slate-950 font-semibold text-xs hover:bg-amber-400 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="aspect-video sm:aspect-square bg-slate-950 rounded-lg border border-slate-800 overflow-hidden relative">
                <img
                  src={FEATURED_SOFTWARE.imageUrl}
                  alt={FEATURED_SOFTWARE.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}