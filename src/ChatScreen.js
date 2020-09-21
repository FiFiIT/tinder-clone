import Avatar from "@material-ui/core/Avatar";
import React, { useState } from "react";
import "./ChatScreen.css";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Filip",
      image: "Karpacz//barbarianna.jpg",
      message: "Wats up?",
    },
    {
      name: "Filip",
      image: "Karpacz//IMG_20200916_131128.jpg",
      message: "How it's going?",
    },
    {
      message: "O.K.",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH FLIP ON 19/09/2020
      </p>
      {messages.map((m) =>
        m.name ? (
          <div className="chatScreen_message" key={m.message}>
            <Avatar className="chatScreen_avatar" alt={m.name} src={m.image} />
            <p className="chatScreen_text">{m.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message" key={m.message}>
            <p className="chatScreen_textUser">{m.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen_inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatScreen;
