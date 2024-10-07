const Skills = () => {
  return (
    <section className="skills-section dark:bg-slate-800">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill">
          <img src="./images/skills/js-logo 1.svg" />
          <p className="dark:text-red">JAVASCRIPT</p>
        </div>
        <div className="skill">
          <img src="./images/skills/node-js.svg" />
          <p className="dark:text-red">NODE</p>
        </div>
        <div className="skill">
          <img src="./images/skills/Rectangle 35.svg" />
          <p className="dark:text-red">REACT</p>
        </div>
        <div className="skill">
          <img src="./images/skills/Group 101.svg" />
          <p className="dark:text-red">VS CODE</p>
        </div>
        <div className="skill">
          <img src="./images/skills/Group 101(1).svg" />
          <p className="dark:text-red">REDUX</p>
        </div>
        <div className="skill">
          <img src="./images/skills/figma-logo 1.svg" />
          <p className="dark:text-red">FIGMA</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
