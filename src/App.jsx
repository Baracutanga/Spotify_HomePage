import "./App.scss";
import LeftPlaylists from "./components/LeftPlaylists";
import Player from "./components/Player";

function App() {
  return (
    <div>
      <div className="geral">
        <div className="content">
          <LeftPlaylists />
        </div>
        <Player />
      </div>
    </div>
  );
}

export default App;
