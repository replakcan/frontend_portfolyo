import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const Profile = () => {
  const { data, lang } = useContext(LangContext);

  return (
    <section className=" profile-section dark:bg-slate-800 dark:text-slate-300">
      <h1 className="profile-title text-limon dark:text-gray-300 font-bold">
        {data.profile.main_title}
      </h1>
      <div className="profile-container dark:text-slate-300">
        <div className="info-container profile-child leading-10 dark:text-slate-300">
          <h2 className="info-heading pb-3 text-3xl text-white dark:text-slate-300">
            {data.profile.sub_title[0]}
          </h2>
          <div className="info dark:text-slate-300">
            <div className="text-limon ">
              {lang === "TR" ? "Doğum tarihi" : "Date of Birth"}
            </div>
            {data.profile.profile_info.birth_date}
          </div>
          <div className="info dark:text-slate-300">
            <div className="text-limon ">{lang === "TR" ? "Şehir" : "City"}</div>
            {data.profile.profile_info.city}
          </div>
          <div className="info dark:text-slate-300">
            <div className="text-limon">
              {lang === "TR" ? "Eğitim" : "Education"}
            </div>
            {data.profile.profile_info.education}
          </div>
          <div className="info dark:text-slate-300">
            <div className="text-limon">
              {lang === "TR" ? "Pozisyon" : "Position"}
            </div>
            {data.profile.profile_info.position}
          </div>
        </div>
        <img
          className="profile-child profile-img"
          src="./images/hero/foto.svg"
        />
        <div className="info-content profile-child">
          <h2 className="aboutMe-heading pb-3 text-3xl text-white dark:text-slate-300 ">
            {data.profile.sub_title[1]}
          </h2>
          <p className="text-white dark:text-slate-300">{data.profile.about_me}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
