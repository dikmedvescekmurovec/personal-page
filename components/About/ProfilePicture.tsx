import Image from "next/image";

import profile from "../../public/profile.png";
import "./profile-picture.scss";

export const ProfilePicture = () => {
  return (
    <Image
      alt="Dik Medvešček Murovec profile picture"
      className="dimm-profile"
      src={profile}
    />
  );
};
