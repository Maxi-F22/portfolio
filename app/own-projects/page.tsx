import Header from "../helpers/header";
import LazyIframe from "../helpers/lazy-iframe";
import { projects } from "../lib/projects";

export default function OwnProjectsPage() {
  const ownProjects = projects.filter((project) => project.type === "own");

  return (
    <div className="space-y-6">
      <Header
        headline="Own Projects"
        text={
          <>
            Here you can find projects that i created just for fun.
          </>
        }
      />

      <section className="space-y-8 pt-2">
        <h2 className="mb-4 text-3xl font-semibold">Games</h2>
        {ownProjects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-[#2a355c] bg-gradient-to-br from-[#131a30] to-[#1a2442] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          >
            <h2 className="mb-2 text-2xl font-semibold">
              {project.title}
            </h2>
            <p className="mb-4 mt-4 text-[#9aa6c4]">{project.description}</p>
            <div className="mt-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="mb-2 mr-2 inline-flex rounded-full border border-[#2a355c] px-2.5 py-1 text-xs text-[#56c7ff]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-3">
              <LazyIframe
                title={project.title}
                src={project.githubPagesUrl}
                buttonLabel="Load Project"
              />
            </div>
            <a target="_blank" href={project.githubPagesUrl} rel="noopener noreferrer" className="mt-3 inline-flex rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#56c7ff]">
              Open Project
            </a>

            <a target="_blank" href={project.repoUrl} rel="noopener noreferrer" className="mt-3 ml-3 inline-flex rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#56c7ff]">
              Open Repository
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
