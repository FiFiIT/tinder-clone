import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const user = {
    mainImg: "Karpacz//IMG_20200704_120039.jpg",
    name: "Filip",
    age: 38,
    school: "WWSIS",
  };

  return (
    <div>
      <div className="userProfileImg">
        <div className="circular--portrait">
          <img src={user.mainImg} alt="my pic" />
        </div>
      </div>
      <div className="userNameAge">
        {user.name}, {user.age}
      </div>
      <div className="userSchool">{user.school}</div>
    </div>
  );
};

export default UserProfile;
