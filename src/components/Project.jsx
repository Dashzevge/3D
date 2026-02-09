import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SKILLS } from "../constants";
import ProjectDetails from "./ProjectDetails";

const skillIconMap = new Map(
  SKILLS.map((skill) => [skill.label.toLowerCase(), skill])
);

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  relatedImages,
  skills,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <h1 className="text-2xl">{title}</h1>
          <p className="mt-2 text-neutral-400">{description}</p>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sand">
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
              return (
                <Link
                  key={skillName}
                  to={`/skills?search=${encodeURIComponent(skill.label)}`}
                  className={`rounded-full border border-neutral-800 bg-neutral-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] transition shadow-[0_0_0px_rgba(34,211,238,0)] hover:border-cyan-300/70 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${skill.color}`}
                  title={skillName}
                  aria-label={skillName}
                >
                  {skill.label}
                </Link>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          subDescription={subDescription}
          image={image}
          relatedImages={relatedImages}
          skills={skills}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
