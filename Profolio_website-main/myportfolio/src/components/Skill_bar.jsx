import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Skill_bar = ({ skillName, percentage }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setProgress(percentage);
    }
  }, [inView, percentage]);

  return (
    <div className="SkillBar" ref={ref}>
      <div className="skill-bar-title">{skillName}</div>
      <div className="skill-bar-container">
        <div
          className="skill-bar-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill_bar;
