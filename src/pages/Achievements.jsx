import { useRef } from "react";
import { motion, useInView, useScroll } from "motion/react";
import { ACHIEVEMENTS } from "../constants";

const AchievementItem = ({ achievement, isLeft }) => {
  const itemRef = useRef(null);
  const isSeen = useInView(itemRef, { amount: 0.4 });

  return (
    <div
      ref={itemRef}
      className="relative pl-12 md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8 md:pl-0"
    >
      <div className="absolute left-0  md:static md:col-start-2 md:flex md:justify-center">
        <span
          className={[
            "absolute left-1 h-6 w-6 rounded-full border shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-colors duration-300 md:left-1/2 md:-translate-x-1/2",
            isSeen ? "border-cyan-300 bg-white/100" : "border-cyan-400/40 bg-neutral-950",
          ].join(" ")}
        />
      </div>
      <div
        className={[
          "rounded-2xl border border-neutral-800 bg-neutral-950/70 p-6 backdrop-blur",
          "w-full md:w-auto",
          isLeft ? "md:col-start-1 md:pr-12" : "md:col-start-3 md:pl-12",
        ].join(" ")}
      >
        <div className="relative pl-6">
          <span className="absolute bottom-0 left-0 top-0 w-px bg-neutral-100/80"></span>

          <div className="flex items-center justify-between gap-4">
            <h3 className="text-left text-lg font-bold font-['Futura'] text-neutral-100">
              {achievement.company}
            </h3>
            {achievement.logo ? (
              <img
                src={achievement.logo}
                alt={`${achievement.company} logo`}
                className="h-[4.875rem] w-[4.875rem] shrink-0 self-center rounded-sm object-contain object-center"
                loading="lazy"
              />
            ) : null}
          </div>
          <div className="flex w-full items-center justify-between text-xs text-neutral-400">
            <span className="py-1">{achievement.title}</span>
            <span className="py-1">{achievement.period}</span>
          </div>

          {achievement.responsibility ? (
            Array.isArray(achievement.responsibility) ? (
              <div className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-300 text-justify">
                {achievement.responsibility.map((item, itemIndex) => (
                  <p key={`${achievement.title}-responsibility-${itemIndex}`}>{item}</p>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-sm text-neutral-500 text-justify">
                {achievement.responsibility}
              </p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  return (
    <div className="border-b border-neutral-900 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-16 text-center">
          <p className="mt-3 text-sm text-neutral-400">
            A career progression from junior developer to senior full-stack engineer, marked by growing technical ownership, system design responsibility, and team leadership.
          </p>
        </div>
        <div ref={timelineRef} className="relative">
          <div className="absolute left-3 top-0 h-full w-[1.5px] bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            className="absolute left-3 top-0 w-[1.5px] bg-white md:left-1/2 md:-translate-x-1/2"
            style={{ scaleY: scrollYProgress, originY: 0 }}
          />
          <div className="space-y-10">
            {ACHIEVEMENTS.slice().reverse().map((achievement, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AchievementItem
                  key={index}
                  achievement={achievement}
                  isLeft={isLeft}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
