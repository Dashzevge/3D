import { OrbitingCircles } from "./OrbitingCircles";
import { GROUP_NAMES, SKILLS } from "../constants";

export function Frameworks() {
  const groups = GROUP_NAMES.filter((group) => group !== "All");
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {groups.map((group, index) => {
        const groupSkills = SKILLS.filter((skill) => skill.group === group);
        const iconSize = Math.max(18, 40 - index * 4);
        const radius = 80 + index * 50;
        const reverse = index % 2 === 1;
        const speed = 2 + index * 0.6;

        return (
          <OrbitingCircles
            key={group}
            iconSize={iconSize}
            radius={radius}
            reverse={reverse}
            speed={speed}
          >
            {groupSkills.map((skill) => (
              <CircleIcon
                key={`${group}-${skill.label}`}
                Icon={skill.Icon}
                color={skill.color}
              />
            ))}
          </OrbitingCircles>
        );
      })}
    </div>
  );
}

const CircleIcon = ({ Icon, color }) => (
  <div className={`rounded-lg p-3 text-4xl ${color}`}>
    <Icon />
  </div>
);
