import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/profile">
          <div className="circular--portrait">
            <img src={user.mainImg} alt="my pic" />
          </div>
        </Link>
      </div>
      <div className="userNameAge">
        {user.name}, {user.age}
      </div>
      <div className="userSchool">{user.school}</div>
    </div>
  );
};

export default UserProfile;
