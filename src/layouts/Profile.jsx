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
    <section className="profile-section">
      <h1>Profile</h1>
      <div className="profile-container">
        <div className="info-container">
          <h2 className="info-heading">Basic Information</h2>
          <p className="info">
            <span>Doğum tarihi </span>
            {profileData.birthDate}
          </p>
          <p className="info">
            <span>İkamet Şehri </span>
            {profileData.province}
          </p>
          <p className="info">
            <span>Eğitim Durumu </span>
            {profileData.education}
          </p>
          <p className="info">
            <span>Tercih Ettiği Rol </span>
            {profileData.position}
          </p>
        </div>
        <img src="./images/foto.svg" />
        <div className="info-content">
          <h2 className="aboutMe-heading">About Me</h2>
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
