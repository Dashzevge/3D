import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.article
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60 transition hover:border-cyan-400/40 hover:bg-neutral-950/80"
      onClick={() => onOpen?.(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen?.(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} details`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-neutral-950/5" />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-cyan-300/70 opacity-0 transition duration-300 group-hover:opacity-100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M8 2H92C96.4 2 98 3.6 98 8V92C98 96.4 96.4 98 92 98H8C3.6 98 2 96.4 2 92V8C2 3.6 3.6 2 8 2Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            initial={{ pathLength: 0, opacity: 0 }}
            whileHover={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, type: "tween" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div>
           
            <h2 className="mt-3 text-2xl font-semibold text-neutral-100">
              {project.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-200/85">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard
