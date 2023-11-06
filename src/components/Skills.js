import React from "react";
import { styled, keyframes } from "styled-components";

const SkillsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const glow = keyframes`   
  0% {  
  box-shadow: 0 0 0px red;
  }
  50% {
    box-shadow: 0 0 8px red;
  }
  100% {
    box-shadow: 0 0 16px red;
  }
`;

const Skill = styled.span`
  background-color: antiquewhite;
  border-radius: 16px;
  width: auto;
  padding: 8px;
  animation: ${glow} 1s ease infinite alternate;
`;

export default function Skills() {
  const skillsArray = [
    "JavaScript",
    "HTML",
    "CSS",
    "Typescript",
    "Jest",
    "React",
    "Next",
    "GCP",
    "Problem Solving",
  ];

  return (
    <div>
      <h2 className="underline text-xl text-zinc-200 mb-5">Skills</h2>
      <SkillsWrapper>
        {skillsArray.map((skill) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsWrapper>
    </div>
  );
}
