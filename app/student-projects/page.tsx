import Header from "../helpers/header";
import LazyIframe from "../helpers/lazy-iframe";
import ProjectImageGallery from "../helpers/project-image-gallery";
import { projects } from "../lib/projects";

export default function StudentProjectsPage() {
  const createSectionId = (value: string) =>
    `type-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;

  const groupedProjects = projects
    .filter((project) => project.type !== "own")
    .reduce<Record<string, (typeof projects)[number][]>>((groups, project) => {
      const typeKey = project.type || "Other";
      if (!groups[typeKey]) {
        groups[typeKey] = [];
      }
      groups[typeKey].push(project);
      return groups;
    }, {});

  const projectGroups = Object.entries(groupedProjects);
  const sectionButtons = [
    ...projectGroups.map(([type]) => ({
      label: type,
      id: createSectionId(type),
    })),
    { label: "Video Editing", id: "type-videos" },
  ];

  return (
    <div className="space-y-6">
      <Header
        headline="Student Projects"
        text={
          <>
            All of these projects were completed as part of my Media Informatics courses at HFU.<br />The different fields are divided into sections.<br /><br />
            To load the embedded GitHub pages projects, click the button in the middle of the window. <br /><br />
            If you are interested in a specific field, click the relevant button below to jump to that section.
          </>
        }
      />

      <nav aria-label="Jump to project type" className="flex flex-wrap gap-2">
        {sectionButtons.map((button) => (
          <a
            key={button.id}
            href={`#${button.id}`}
            className="inline-flex rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#56c7ff]"
          >
            {button.label}
          </a>
        ))}
      </nav>

      <section className="space-y-8 pt-2">
        {projectGroups.map(([type, typedProjects]) => (
          <div key={type} id={createSectionId(type)} className="scroll-mt-28 space-y-4">
            <h2 className="mb-4 text-3xl font-semibold">{type}</h2>
            <div className="grid gap-6">
              {typedProjects.map((project) => (
                <article
                  key={`${type}-${project.title}`}
                  className="min-w-0 rounded-2xl border border-[#2a355c] bg-gradient-to-br from-[#131a30] to-[#1a2442] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mb-4 mt-4 text-[#9aa6c4] whitespace-pre-line">{project.description}</p>
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

                  {project.githubPagesUrl && (
                    <>
                      <div className="mt-3">
                        <LazyIframe
                          title={project.title}
                          src={project.githubPagesUrl}
                          buttonLabel="Load Embedded Project"
                          scale={project.iframeScale}
                        />
                      </div>
                      <a
                        target="_blank"
                        href={project.githubPagesUrl}
                        rel="noopener noreferrer"
                        className="mr-3 mt-3 inline-flex rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#56c7ff]"
                      >
                        Open Project
                      </a>
                    </>
                  )}

                  {project.imageSources.length > 0 && (
                    <div className="mt-2 pt-1 min-w-0 overflow-hidden">
                      <ProjectImageGallery title={project.title} imageSources={project.imageSources} />
                    </div>
                  )}

                  {project.repoUrl && (
                    <>
                      <a
                        target="_blank"
                        href={project.repoUrl}
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex rounded-xl border border-[#2a355c] px-3 py-2 text-sm transition hover:-translate-y-0.5 hover:border-[#56c7ff]"
                      >
                        {project.repoUrl.includes("git") ? "Open Repository" : "Open Link"}
                      </a>
                    </>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
          <div key="videos" id="type-videos" className="scroll-mt-28 space-y-4">
            <h2 className="mb-4 text-3xl font-semibold">Video Editing</h2>
            <div className="grid gap-6">
              <article
                  key="Games22"
                  className="rounded-2xl border border-[#2a355c] bg-gradient-to-br from-[#131a30] to-[#1a2442] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  <h3 className="mb-2 text-2xl font-semibold">Supercut of the most successful games 2022</h3>
                  <p className="mb-4 mt-4 text-[#9aa6c4]">For my final assignment on a Video Editing course, I created a supercut of various games released in 2022. <br />
                  I used Adobe Premiere Pro to edit the video itself and After Effects to add the effects.</p>
                  <div className="mt-3">
                    <span className="mb-2 mr-2 inline-flex rounded-full border border-[#2a355c] px-2.5 py-1 text-xs text-[#56c7ff]">
                      Video Editing
                    </span>
                    <span className="mb-2 mr-2 inline-flex rounded-full border border-[#2a355c] px-2.5 py-1 text-xs text-[#56c7ff]">
                      Premiere Pro
                    </span>
                    <span className="mb-2 mr-2 inline-flex rounded-full border border-[#2a355c] px-2.5 py-1 text-xs text-[#56c7ff]">
                      After Effects
                    </span>
                  </div>

                  <div className="mt-3">
                    <video className="w-full h-auto" controls preload="auto">
                      <source src="/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </article>
            </div>
          </div>
      </section>
    </div>
  );
}
