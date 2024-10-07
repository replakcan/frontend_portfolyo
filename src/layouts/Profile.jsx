import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

const Profile = () => {
  const { data, lang } = useContext(LangContext);

  return (
    <section className=" profile-section dark:bg-gray-500">
      <h1 className="text-limon dark:text-gray-800 font-bold">
        {data.profile.main_title}
      </h1>
      <div className="profile-container">
        <div className="info-container">
          <h2 className="info-heading text-3xl">{data.profile.sub_title[0]}</h2>
          <p className="info">
            <span className="text-limon">{lang === "TR" ? "Doğum tarihi" : "Date of Birth"} </span>
            {data.profile.profile_info.birth_date}
          </p>
          <p className="info">
            <span className="text-limon">{lang === "TR" ? "Şehir" : "City"} </span>
            {data.profile.profile_info.city}
          </p>
          <p className="info">
            <span className="text-limon">{lang === "TR" ? "Eğitim" : "Education"} </span>
            {data.profile.profile_info.education}
          </p>
          <p className="info">
            <span className="text-limon">{lang === "TR" ? "Pozisyon" : "Position"} </span>
            {data.profile.profile_info.position}
          </p>
        </div>
        <img src="./images/hero/foto.svg" />
        <div className="info-content">
          <h2 className="aboutMe-heading text-3xl">
            {data.profile.sub_title[1]}
          </h2>
          <p>{data.profile.about_me}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
