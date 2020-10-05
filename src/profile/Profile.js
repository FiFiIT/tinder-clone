import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import IconButton from "@material-ui/core/IconButton";
import "./Profile.css";

const Profile = () => {
  const onChange = (e) => {
    console.log(e.target);
  };

  const onClickItem = (e) => {
    console.log(e.target);
  };

  const onClickThumb = (e) => {
    console.log(e.target);
  };

  const pictures = [
    {
      name: "Kotek",
      url: "Karpacz//IMG_20200704_120039.jpg",
    },
    {
      name: "Tobiaszek",
      url: "Karpacz//IMG_20200815_182037.jpg",
    },
    {
      name: "Citoren",
      url: "Karpacz//IMG_20200826_100346.jpg",
    },
    {
      name: "Barbarianna",
      url: "Karpacz//barbarianna.jpg",
    },
  ];

  const user = {
    mainImg: "Karpacz//IMG_20200704_120039.jpg",
    name: "Filip",
    age: 38,
    school: "WWSIS",
  };

  return (
    <div className="tinder_profile">
      <Carousel
        showArrows={true}
        showThumbs={false}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        <div>
          <img className="tinder_img" src="Karpacz//barbarianna.jpg" />
          <p className="legend">Barbarianna</p>
        </div>
        <div>
          <img className="tinder_img" src="Karpacz//IMG_20200815_182037.jpg" />
          <p className="legend">Tobiaszek</p>
        </div>
      </Carousel>
      <div className="down_button_container">
        <IconButton className="profile_down_arrow">
          <ArrowDownwardIcon fontSize="large" />
        </IconButton>
      </div>
      <div>
        {user.name} {user.age}
      </div>
      <div>{user.school}</div>
      <div>mniej niż 1 kilomet stąd</div>
    </div>
  );
};

export default Profile;
