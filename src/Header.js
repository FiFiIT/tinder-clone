import React from "react";
import { Link, useHistory } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import "./Header.css";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIos
            className="header_icon"
            fontSize="large"
            color="action"
          />
        </IconButton>
      ) : (
        <IconButton>
          {" "}
          <PersonIcon className="header_icon" fontSize="large" color="action" />
        </IconButton>
      )}
      <Link to="/">
        <img className="header_logo" src="./tinder.png" alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon
            className="header_icon"
            fontSize="large"
            color="action"
          />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
