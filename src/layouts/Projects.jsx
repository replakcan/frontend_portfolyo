const Projects = () => {
  return (
    <section className="projects-section bg-limon dark:bg-gray-800">
      <h1 className="project-header font-bold dark:text-gray-300">Projects</h1>
      <div className="projects-container dark:bg-gray-300">
        <img src="./images/projects/Rectangle 41.png" />
        <div className="dark:bg-gray-300 project-content">
          <h2>Workintech</h2>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="project-btns">
            <button>react</button>
            <button>redux</button>
            <button>vercel</button>
          </div>
          <div className="project-links">
            <a href="">View Site</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <img src="./images/projects/Rectangle 41.png" />
        <div className="project-content dark:bg-gray-300">
          <h2>Workintech</h2>
          <p>
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="project-btns">
            <button>react</button>
            <button>redux</button>
            <button>vercel</button>
          </div>
          <div className="project-links">
            <a href="">View Site</a>
            <a href="">Github</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
