import { useContext } from "react";
import Project from "../components/Project";
import { useMainData } from "../services/tanStack";
import { LangContext } from "../contexts/LangContext";
/* import { LangContext } from "../contexts/LangContext"; */

const Projects = () => {
  const { isPending, error } = useMainData();
  const { data } = useContext(LangContext);
  /* const { projectData } = useContext(LangContext); */
  if (isPending) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <section className="projects-section bg-limon dark:bg-slate-500 dark:text-slate-900">
      <h1 className="project-header font-bold dark:text-gray-800">Projects</h1>
      {data.projects?.map((project, index) => {
        return (
          <Project
            key={index}
            src={project.img_src}
            project_title={project.title}
            project_info={project.info}
            tools={project.tools}
            links={project.links}
          />
        );
      })}
    </section>
  );
};

export default Projects;
