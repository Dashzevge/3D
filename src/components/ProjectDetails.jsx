import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SKILLS } from "../constants";

const skillIconMap = new Map(
  SKILLS.map((skill) => [skill.label.toLowerCase(), skill])
);
const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  skills,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {Array.isArray(subDescription) ? (
            subDescription.map((subDesc, index) => (
              <p key={`${title}-sub-${index}`} className="mb-3 font-normal text-neutral-400">
                {subDesc}
              </p>
            ))
          ) : (
            <p className="mb-3 font-normal text-neutral-400">{subDescription}</p>
          )}
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap items-center gap-3">
              {skills.map((skillName) => {
                const skill = skillIconMap.get(skillName.toLowerCase());
                if (!skill) {
                  return (
                    <span
                      key={skillName}
                      className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400"
                    >
                      {skillName}
                    </span>
                  );
                }
                const Icon = skill.Icon;
                return (
                <Link
                  key={skillName}
                  to={`/skills?search=${encodeURIComponent(skill.label)}`}
                  className={`rounded-full border border-neutral-800 bg-neutral-950/70 p-2 text-lg ${skill.color}`}
                  title={skillName}
                  aria-label={skillName}
                >
                  <Icon />
                </Link>
              );
            })}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
            >
              View Project{" "}
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
