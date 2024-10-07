import { useState } from "react";

const initialValues = {
  birthDate: "24.03.1996",
  province: "Ankara",
  education: "Hacettepe Ünv. Biyoloji Lisans, 2016",
  position: "Frontend, UI",
};

const Profile = () => {
  const [profileData, setProfileData] = useState(initialValues);

  return (
    <section className=" profile-section dark:bg-gray-500">
      <h1 className="text-limon dark:text-gray-300 font-bold">Profile</h1>
      <div className="profile-container">
        <div className="info-container">
          <h2 className="info-heading text-3xl">Basic Information</h2>
          <p className="info">
            <span className="text-limon">Doğum tarihi </span>
            {profileData.birthDate}
          </p>
          <p className="info">
            <span className="text-limon">İkamet Şehri </span>
            {profileData.province}
          </p>
          <p className="info">
            <span className="text-limon">Eğitim Durumu </span>
            {profileData.education}
          </p>
          <p className="info">
            <span className="text-limon">Tercih Ettiği Rol </span>
            {profileData.position}
          </p>
        </div>
        <img src="./images/hero/foto.svg" />
        <div className="info-content">
          <h2 className="aboutMe-heading text-3xl">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
            mollitia adipisci facilis voluptatem dicta neque eaque quia velit,
            ea, perferendis inventore et aliquam quibusdam alias eligendi
            assumenda quis ullam doloribus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
