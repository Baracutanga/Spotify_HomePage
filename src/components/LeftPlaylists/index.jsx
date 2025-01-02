import React from 'react';
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
        <div className="playlist" id='first'></div>
        <div className="playlist" id='second'></div>
        <div className="playlist" id='third'></div>
      </div>
    </div>
  )
}

export default LeftPlaylists