import React from "react";
import "./styles.scss";
import HomePlaylists from "../../icons/home.svg";
import MinimizePlaylist from "../../icons/angle-left.svg";

const LeftPlaylists = () => {
  return (
    <div className="leftPlaylistContainer">
      <div className="spotifyLogoWhite">
        <div id="spotifyLogo"></div>
      </div>
      <div className="playlists">
        <img src={HomePlaylists} alt="" />
        <img src={MinimizePlaylist} alt="" />
        <div className="playlist" id="first">
          <span>#1</span>
        </div>
        <div className="playlist" id="second">
          <span>#2</span>
        </div>
        <div className="playlist" id="third">
          <span>#3</span>
        </div>
      </div>
    </div>
  );
};

export default LeftPlaylists;
