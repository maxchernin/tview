import React, {Component} from 'react';
import Shows from "./shows/shows.react";
import Episodes from "./episodes/episodes.react";
import Player from "./player/player.react";
import apiService from '../core/apiService'
import showsData from './shows/shows.json';

// import './Tview.css';

class Tview extends Component {
  getInitialState = function () {
    return {
      shows: showsData
    }
  };

  constructor(props){
    super();
    this.apiService = apiService;
    this.state = this.getInitialState();
  }


  componentDidMount = function () {
    console.log(this.state.shows);

    // var myHeaders = new Headers();
    // let myInit = { method: 'GET',
    //   headers: myHeaders,
    //   mode: 'cors',
    //   cache: 'default' };
    // myHeaders.append("Access-Control-Allow-Origin", "*");
    // fetch('http://tvdb.reali.com/series', myInit)
    // fetch('http://api.tvmaze.com/shows/1', myInit)
    //   .then((result) => {
    //   console.log(result);
    //   })
  };

  render() {
    return (
      <div className="Show">
        tview
        <Shows showsList={this.state.shows}/>
        <Episodes/>
        <Player/>
      </div>
  )
    ;
  }
}

export default Tview;