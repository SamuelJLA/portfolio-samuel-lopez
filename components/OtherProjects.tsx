import { OTHER_PROJECTS } from '@/data/projects';
import DemoAccess from './DemoAccess';

export default function OtherProjects() {
  return (
    <section className="py-16 border-b border-slate-800/60 bg-slate-950/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-500 font-mono">
            Trabajo Adicional
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Otros Proyectos & Herramientas Internas
          </h2>
        </div>

        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {OTHER_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid bg-slate-900/60 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Renderizado de imágenes */}
                {project.id === 'personal-finance' ? (
                  <div className="aspect-video bg-slate-950 rounded border border-slate-800 mb-4 grid grid-cols-2 gap-0.5 overflow-hidden p-0.5">
                    <img
                      src="/placeholders/finance-1.png"
                      alt="Finanzas"
                      className="w-full h-full object-cover object-top rounded-l hover:scale-105 transition-transform duration-300"
                    />
                    <img
                      src="/placeholders/finance-2.png"
                      alt="Hábitos"
                      className="w-full h-full object-cover object-top rounded-r hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-slate-950 rounded border border-slate-800 mb-4 overflow-hidden relative group">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badge/Texto pequeño para primeros proyectos */}
                    {(project.id === 'samandtech-website' || project.id === 'it-inventory') && (
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800/80 text-[10px] font-mono text-slate-400">
                        Primeros proyectos / Prototipo
                      </div>
                    )}
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demoCredentials && (
                  <div className="mb-4">
                    <DemoAccess
                      email={project.demoCredentials.email}
                      passwordPlaceholder={project.demoCredentials.passwordPlaceholder}
                    />
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800/80 text-xs">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 font-semibold transition-colors inline-block"
                    >
                      Ver Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}