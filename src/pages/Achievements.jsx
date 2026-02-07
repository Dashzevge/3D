import { useEffect, useRef, useState } from "react";
import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  const itemRefs = useRef([]);
  const [seenItems, setSeenItems] = useState(new Set());
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          setSeenItems((prev) => {
            const next = new Set(prev);
            if (entry.isIntersecting) {
              next.add(index);
            } else {
              next.delete(index);
            }
            return next;
          });
        });
      },
      { threshold: 0.4 }
    );

    itemRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let rafId = null;
    const updateProgress = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const mid = window.innerHeight * 0.5;
      const progressRaw = (mid - rect.top) / rect.height;
      const clamped = Math.min(Math.max(progressRaw, 0), 1);
      setScrollProgress(clamped);
      if (clamped === 1) {
        setSeenItems(new Set(ACHIEVEMENTS.map((_, index) => index)));
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        rafId = null;
      });
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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
          <div
            className="absolute left-3 top-0 w-[1.5px] bg-white md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${scrollProgress * 100}%` }}
          />
          <div className="space-y-10">
            {ACHIEVEMENTS.slice().reverse().map((achievement, index) => {
              const isLeft = index % 2 === 0;
              const isSeen = seenItems.has(index);
              return (
                <div
                  key={index}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  data-index={index}
                  className="relative pl-12 md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8 md:pl-0"
                >
                  <div className="absolute left-1 top-2 md:static md:col-start-2 md:flex md:justify-center">
                      <span
                        className={[
                          "absolute left-1 top-2 h-6 w-6 rounded-full border shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-colors duration-300 md:left-1/2 md:-translate-x-1/2",
                          isSeen
                            ? "border-white bg-white/90"
                            : "border-cyan-400/40 bg-neutral-950",
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
                    <div className="relative mt-4 pl-6">
                      <span className="absolute left-0 top-0 bottom-0 w-px bg-neutral-100/80"></span>
                    
                      <div className="mt-4 flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold font-['Futura'] text-neutral-100">
                          {achievement.company}
                        </h3>
                        {achievement.logo ? (
                          <img
                            src={achievement.logo}
                            alt={`${achievement.company} logo`}
                            className="h-15 w-15 shrink-0 self-center rounded-sm object-contain object-center"
                            loading="lazy"
                          />
                        ) : null}
                      </div>
                      <div className="flex w-full items-center justify-between text-xs text-neutral-400">
                        <span className="py-1">
                          {achievement.title}
                        </span>
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
