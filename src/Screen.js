import React from "react";

// File import
import {
  Menu,
  Game,
  Setting,
  Coverflow,
  AllSongs,
  Artists,
  Albums,
} from "./index";

class Screen extends React.Component {
  render() {
    const {
      options: optionsInMenu,
      showPage,
      selected: selectedOption,
      current_music_selection: currentMusicSelection,
      song_index: songIndex,
    } = this.props.state;
    const { currentlyOnPlayMusicScreen, playPauseButtonClicked } = this.props;
    return (
      <div className="screen-container">
        <Menu selectedOption={selectedOption} optionsInMenu={optionsInMenu} />

        {showPage === 0 && optionsInMenu.length === 4 && <Game />}
        {showPage === 2 && optionsInMenu.length === 4 && <Setting />}
        {showPage === 3 && optionsInMenu.length === 4 && <Coverflow />}

        {showPage === 0 && optionsInMenu.length === 3 && (
          <AllSongs
            currentMusicSelection={currentMusicSelection}
            songIndex={songIndex}
            currentlyOnPlayMusicScreen={currentlyOnPlayMusicScreen}
            playPauseButtonClicked={playPauseButtonClicked}
          />
        )}
        {showPage === 1 && optionsInMenu.length === 3 && <Artists />}
        {showPage === 2 && optionsInMenu.length === 3 && <Albums />}
      </div>
    );
  }
}

export default Screen;
