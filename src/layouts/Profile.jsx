import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const Profile = () => {
  const { data, lang } = useContext(LangContext);

  return (
    <section className=" profile-section dark:bg-gray-500">
      <h1 className="profile-title text-limon dark:text-gray-800 font-bold">
        {data.profile.main_title}
      </h1>
      <div className="profile-container">
        <div className="info-container profile-child leading-10">
          <h2 className="info-heading pb-3 text-3xl text-white">
            {data.profile.sub_title[0]}
          </h2>
          <div className="info">
            <div className="text-limon">
              {lang === "TR" ? "Doğum tarihi" : "Date of Birth"}
            </div>
            {data.profile.profile_info.birth_date}
          </div>
          <div className="info">
            <div className="text-limon">{lang === "TR" ? "Şehir" : "City"}</div>
            {data.profile.profile_info.city}
          </div>
          <div className="info">
            <div className="text-limon">
              {lang === "TR" ? "Eğitim" : "Education"}
            </div>
            {data.profile.profile_info.education}
          </div>
          <div className="info">
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
          <h2 className="aboutMe-heading pb-3 text-3xl text-white">
            {data.profile.sub_title[1]}
          </h2>
          <p className="text-white">{data.profile.about_me}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
