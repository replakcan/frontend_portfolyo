const Hero = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className="hero-section dark:bg-gray-800">
      <div className="hero-nav">
        <h2 className="text-limon">Alper</h2>
        <div>
          <button className="text-limon text-sm">TÜRKÇE'YE GEÇ</button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              data-testid="darkMode-toggle"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3  text-sm text-morumsu dark:text-gray-300 ">
              {darkMode ? "DARK MODE" : "LIGHT MODE"}
            </span>
          </label>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="text-limon font-bold">
            I am a Frontend <br />
            Developer...
          </h1>
          <p className="text-white">
            ...who likes to craft solid and scalable <br></br>frontend products
            with great user experiences.
          </p>
          <div className="hero-btns ">
            <button className="text-btnclr dark:text-customRed">
              <img src="./images/hero/github-mark.svg"></img>
              <span>Github</span>
            </button>
            <button className="text-btnclr dark:text-customRed">
              <img src="./images/hero/linkedin.svg"></img>
              <span>Linkedin</span>
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src="./images/hero/foto.svg" />
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sed inventore sapiente quo ducimus enim modi odit aliquid, aliquam corporis sunt repudiandae iste laudantium esse error a nobis dolorem nisi.</p> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
