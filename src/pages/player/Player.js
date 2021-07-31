import React from "react";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/side-bar/Sidebar";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar/>
        <Body/>
      </div>
      <Footer/>
    </div>
  );
}

export default Player;
