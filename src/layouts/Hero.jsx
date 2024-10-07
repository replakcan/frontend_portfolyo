import useLocalStorage from "../hooks/useLocalStorage";

const Hero = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <section className="hero-section">
      <div className="hero-nav">
        <h2>Alper</h2>
        <div>
          <button>LANG</button>
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            data-testid="darkMode-toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            I am a Frontend <br />
            Developer...
          </h1>
          <p>
            ...who likes to craft solid and scalable <br></br>frontend products with
            great user experiences.
          </p>
          <div className="hero-btns">
            <button>
              <img src="./images/hero/github-mark.svg"></img>
              <span>Github</span>
            </button>
            <button>
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
