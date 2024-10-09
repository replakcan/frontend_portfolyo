import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { skills } from "../data";
import Skill from "../components/skill";

const Skills = () => {
  const { data } = useContext(LangContext);

  return (
    <section className="skills-section dark:bg-slate-500">
      <h1 className="skills-title font-bold dark:text-slate-800 ">{data.skills.main_title}</h1>
      <div className="skills-container">
        {skills.map((skill) => {
          return <Skill key={skill.id} src={skill.src} name={skill.name} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
