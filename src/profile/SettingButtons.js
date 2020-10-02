import React from "react";

import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CreateIcon from "@material-ui/icons/Create";

import { styled } from "@material-ui/styles";

import "./SettingButtons.css";

const MyCameraAltIcon = styled(CameraAltIcon)({ color: "white" });

const SettingButtons = () => {
  return (
    <div className="settingButtons">
      <div>
        <div className="settingButton_container">
          <IconButton className="settingButton_Settings">
            <SettingsIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="iconText">USTAWIENIA</div>
      </div>
      <div className="addFile">
        <div className="settingButton_container">
          <IconButton className="settingButton_AddFile">
            <MyCameraAltIcon fontSize="large" />
          </IconButton>
        </div>
        <div>DODAJ PLIKI</div>
      </div>
      <div>
        <div className="settingButton_container">
          <IconButton className="settingButton_EditInfo">
            <CreateIcon fontSize="large" />
          </IconButton>
        </div>
        <div>EDYTUJ INFO</div>
      </div>
    </div>
  );
};

export default SettingButtons;
