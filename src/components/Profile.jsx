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
        <div className="profile-container">
        <h2 className="info-heading">Basic Information</h2>
      <div className="info-container">
        <p>
          <span>Doğum tarihi </span>
          {profileData.birthDate}
        </p>
        <p>
          <span>İkamet Şehri </span>
          {profileData.province}
        </p>
        <p>
          <span>Eğitim Durumu </span>
          {profileData.education}
        </p>
        <p>
          <span>Tercih Ettiği Rol </span>
          {profileData.position}
        </p>
      </div>
      <img src="src/assets/images/foto.svg"/>
        <h2 className="aboutMe-heading">About Me</h2>
      <div className="info-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est mollitia
          adipisci facilis voluptatem dicta neque eaque quia velit, ea,
          perferendis inventore et aliquam quibusdam alias eligendi assumenda
          quis ullam doloribus.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Profile;
