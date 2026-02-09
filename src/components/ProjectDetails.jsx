import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SKILLS } from "../constants";

const skillIconMap = new Map(
  SKILLS.map((skill) => [skill.label.toLowerCase(), skill])
);
const ProjectDetails = ({
  title,
  subDescription,
  image,
  relatedImages,
  skills,
  href,
  closeModal,
}) => {
  const images = relatedImages?.length ? relatedImages : [image];
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-20 p-2 rounded-sm top-5 right-5 bg-midnight/90 hover:bg-gray-500"
          aria-label="Close project details"
        >
          <img src="/assets/close.svg" className="w-6 h-6" alt="Close" />
        </button>
        <div className="relative">
          <img
            src={images[activeIndex]}
            alt={`${title} screenshot ${activeIndex + 1}`}
            className="w-full rounded-t-2xl"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={showPrev}
                className="absolute z-10 grid w-10 h-10 text-xl text-white -translate-y-1/2 rounded-full left-3 top-1/2 place-items-center bg-black/40 hover:bg-black/60"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={showNext}
                className="absolute z-10 grid w-10 h-10 text-xl text-white -translate-y-1/2 rounded-full right-3 top-1/2 place-items-center bg-black/40 hover:bg-black/60"
                aria-label="Next image"
              >
                ›
              </button>
              <div className="absolute flex items-center gap-2 -translate-x-1/2 bottom-3 left-1/2">
                {images.map((_, index) => (
                  <button
                    key={`${title}-dot-${index}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      index === activeIndex ? "bg-cyan-300" : "bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{subDescription}</p>
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
                    className={`rounded-full border border-neutral-800 bg-neutral-950/70 p-2 text-lg transition shadow-[0_0_0px_rgba(34,211,238,0)] hover:border-cyan-300/70 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${skill.color}`}
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
