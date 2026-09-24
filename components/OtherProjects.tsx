import { OTHER_PROJECTS } from '@/data/projects';

export default function OtherProjects() {
  return (
    <section className="py-16 border-b border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Additional Work</h2>
        <h3 className="text-xl font-bold text-white mb-8">Other Software & Internal Tools</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {OTHER_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video bg-slate-950 rounded border border-slate-800/60 mb-3 flex items-center justify-center text-slate-600 text-[11px] font-mono">
                  [ {project.title} Preview ]
                </div>
                <h4 className="font-bold text-white text-base mb-2">{project.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">{project.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-800/60 text-slate-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-xs pt-2 border-t border-slate-800/60">
                  <a href={project.demoUrl} className="text-slate-300 hover:text-white transition-colors">Demo →</a>
                  <a href={project.githubUrl} className="text-slate-500 hover:text-slate-300 transition-colors">GitHub →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}