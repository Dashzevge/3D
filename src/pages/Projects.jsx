import { useState } from "react";
import Project from "../components/Project";
import { PROJECTS } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <div>
    <div className="my-16 text-center">
          <p className="mt-3 text-sm text-neutral-400">
            A focused set of products and platforms across telecom, finance, and education.
          </p>
      </div>
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space"
    >
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {PROJECTS.map((project) => (
        <Project
          key={project.id}
          {...project}
          skills={project.skills || []}
          setPreview={setPreview}
        />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
    </div>
  );
};

export default Projects;
