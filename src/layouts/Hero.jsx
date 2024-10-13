import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useMainData } from "../services/tanStack";

const Hero = () => {
  const { lang, toggleLang } = useContext(LangContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { data } = useContext(LangContext);

  const { data: mainData } = useMainData();
  console.log("mainData: ", mainData)
  return (
    <section className=" hero-section dark:bg-slate-800">
      <div className="hero-nav">
        <h2 className="font-bold text-3xl text-limon">{data.hero.name}</h2>
        <div className="interactive">
          <button
            onClick={toggleLang}
            className="text-limon text-sm dark:text-gray-300"
          >
            {lang === "EN" ? (
              <div className="language">
                <p>{data.hero.interactive[0]}</p>
                <img src="./images/hero/turkey.svg" alt="Türkçe için tıkla" />
              </div>
            ) : (
              <div className="language">
                <p>{data.hero.interactive[0]}</p>
                <img src="./images/hero/usa.svg" alt="Click for English" />
              </div>
            )}
          </button>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              /* data-testid="darkMode-toggle" */
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className=" text-btnswitch w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="gecemodu ms-3  text-sm dark:text-gray-300 ">
              {data.hero.interactive[1]}
            </span>
          </label>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-left">
          <h1 className="text-limon main_title   font-bold dark:text-gray-300">
            {data.hero.title}
          </h1>

          <p className="text-white">{data.hero.para}</p>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
