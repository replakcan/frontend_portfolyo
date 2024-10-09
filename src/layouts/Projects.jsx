import Project from "../components/Project";
import { projects } from "../data";

const Projects = () => {
  return (
    <section className="projects-section bg-limon dark:bg-slate-500 dark:text-slate-900">
      <h1 className="project-header font-bold dark:text-gray-800">Projects</h1>
      {projects.map((project, index) => {
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
