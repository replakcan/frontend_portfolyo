/* eslint-disable react/prop-types */
const Project = ({ project_title, project_info, tools, links, src }) => {
  return (
    <>
      <div className="projects-container dark:bg-gray-300">
        <div className="project-left">
          <img className="prj-img" src={src} />
        </div>
        <div className="project-content project-right dark:bg-gray-300">
          <h2>{project_title}</h2>
          <p>{project_info}</p>
          <div className="project-btns">
            {tools.map((tool, index) => {
              return <button key={index}>{tool}</button>;
            })}
          </div>
          <div className="project-links">
            {links.map((link, index) => {
              return <a href={link.site} target="_blank" key={index}>{link.name}</a>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
