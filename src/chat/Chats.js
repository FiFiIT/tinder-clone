import React from "react";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Filip"
        message="Hey! how are you :)"
        timestamp="35 minutes ago"
        profilePic="Karpacz/barbarianna.jpg"
      />
      <Chat
        name="Tobiaszek"
        message="Kaczuszki mają którkie nóżki"
        timestamp="35 minutes ago"
        profilePic="Karpacz//IMG_20200815_182037.jpg"
      />
      <Chat
        name="Ewa"
        message="Kaszka dla Tobiaszka!"
        timestamp="1 hour ago"
        profilePic="Karpacz//IMG_20200916_131128.jpg"
      />
    </div>
  );
};

export default Chats;
