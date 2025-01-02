import React from "react";
import "./styles.scss";

const Player = () => {
  return (
    <div className="musicPlayerContainer">
      <div className="song">
        <div id="songImg"></div>
        <div className="songDetails">
          <span id="songName">Song Name</span>
          <span id="artistName">Artist</span>
        </div>
      </div>
      <div className="player">
        <div className="buttons"></div>
        <div className="duration"></div>
      </div>
      <div className="options"></div>
    </div>
  );
};

export default Player;
