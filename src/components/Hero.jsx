const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            I am a Frontend <br />
            Developer...
          </h1>
          <p>
            ...who likes to craft solid and scalable frontend products with
            great user experiences.
          </p>
          <div className="hero-btns">
            <button>
              <img src="src/assets/images/github-mark.svg" />
              <span>Github</span>
            </button>
            <button>
              <img src="src/assets/images/github-mark.svg" />
              <span>Linkedin</span>
            </button>
          </div>
        </div>
        <div className="hero-right">
          {/* <img src="src/assets/images/foto.svg" /> */}
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sed inventore sapiente quo ducimus enim modi odit aliquid, aliquam corporis sunt repudiandae iste laudantium esse error a nobis dolorem nisi.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
