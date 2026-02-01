import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS, SKILLS } from "../constants";
import ProjectCard from "../components/ProjectCard";

const skillIconMap = new Map(
  SKILLS.map((skill) => [skill.label.toLowerCase(), skill])
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (!activeProject || !modalRef.current) return;
    modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [activeProject]);

  return (
    <section className="border-b border-neutral-900 pb-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="my-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
            Selected Work
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-100">
            Projects
          </h1>
          <p className="mt-3 text-sm text-neutral-400">
            A focused set of products and platforms across telecom, finance, and education.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 px-6 py-10 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-[32px] border border-neutral-800 bg-neutral-950"
              initial={{ y: 30, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover"
                  />
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full text-cyan-300/70"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M8 2H92C96.4 2 98 3.6 98 8V92C98 96.4 96.4 98 92 98H8C3.6 98 2 96.4 2 92V8C2 3.6 3.6 2 8 2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, type: "tween" }}
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                      Project spotlight
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-neutral-100">
                      {activeProject.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                      {activeProject.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xl">
                    {activeProject.technologies.map((tech, index) => {
                      const skill = skillIconMap.get(tech.toLowerCase());
                      if (!skill) {
                        return (
                          <span
                            key={`${tech}-${index}`}
                            className="rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500"
                          >
                            {tech}
                          </span>
                        );
                      }
                      const Icon = skill.Icon;
                      return (
                        <motion.span
                          key={`${tech}-${index}`}
                          className={`rounded-full border border-neutral-800 bg-neutral-950/70 p-2 ${skill.color}`}
                          title={tech}
                          aria-label={tech}
                          whileHover={{ y: -4, scale: 1.08 }}
                          transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        >
                          <Link to={`/skills?search=${encodeURIComponent(skill.label)}`}>
                            <Icon />
                          </Link>
                        </motion.span>
                      );
                    })}
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    {activeProject.link && (
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300"
                      >
                        Visit project
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveProject(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
