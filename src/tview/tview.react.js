import React, {Component} from 'react';
import Shows from "./shows/shows.react";
import Episodes from "./episodes/episodes.react";
import Player from "./player/player.react";
// import './Tview.css';

class Tview extends Component {
  render() {
    return (
      <div className="App">
        tview
        <Shows/>
        <Episodes/>
        <Player/>
      </div>
  )
    ;
  }
}

export default Tview;