import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProfile from "./profile/UserProfile";
import TinderCards from "./cards/TinderCards";
import SwipeButtons from "./common/SwipeButtons";
import Header from "./common/Header";
import Chats from "./chat/Chats";
import ChatScreen from "./chat/ChatScreen";
import "./App.css";
import SettingButtons from "./profile/SettingButtons";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/userprofile">
            <Header backButton="/" />
            <UserProfile />
            <SettingButtons />
          </Route>
          <Route path="/profile">
            <Header backButton="/userprofile" />
            <Profile />
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
