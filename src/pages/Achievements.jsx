import { ACHIEVEMENTS } from "../constants";

const Achievements = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="my-16 text-center">
          <p className="mt-3 text-sm text-neutral-400">
            A progression from junior developer to senior full stack leadership.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-neutral-800 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {ACHIEVEMENTS.slice().reverse().map((achievement, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative pl-12 md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8 md:pl-0"
                >
                  <div className="absolute left-1 top-2 md:static md:col-start-2 md:flex md:justify-center">
                      <span className="absolute left-1 top-2 h-6 w-6 rounded-full border border-cyan-400/40 bg-neutral-950 shadow-[0_0_12px_rgba(34,211,238,0.35)] md:left-1/2 md:-translate-x-1/2" />
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
                    
                      <h3 className="mt-4 text-lg font-bold font-['Futura'] text-neutral-100">
                        {achievement.company}
                      </h3>
                      <div className="flex w-full items-center justify-between text-xs text-neutral-400">
                        <span className="py-1">
                          {achievement.title}
                        </span>
                        <span className="py-1">{achievement.period}</span>
                      </div>

                      {achievement.responsibility ? (
                        Array.isArray(achievement.responsibility) ? (
                          <div className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-300">
                            {achievement.responsibility.map((item, itemIndex) => (
                              <p key={`${achievement.title}-responsibility-${itemIndex}`}>{item}</p>
                            ))}
                          </div>
                        ) : (
                          <p className="mt-2 text-sm text-neutral-500">
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
