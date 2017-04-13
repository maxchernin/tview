import React, {Component} from "react";
import Shows from "./shows/shows.react";
import Episodes from "./episodes/episodes.react";
import Videoplayer from "./player/player.react";
import _ from "lodash";
// import showsData from './shows/shows.json';

// import './Tview.css';

class Tview extends Component {
	getInitialState = function () {
		return {
			shows: [],
			selectedShow: [],
			playerUrl: ''
		}
	};

	constructor(props) {
		super();
		this.state = this.getInitialState();
		this.getShows = new XMLHttpRequest();

	}


	componentDidMount = () => {
		console.log(this.state.shows);
		this.getShows.onreadystatechange = function(response) {
			console.log(response);
			if(response.target.readyState === XMLHttpRequest.DONE && response.target.status === 200) {
				JSON.parse(response.target.responseText) !== this.state.selectedShow &&  this.setState({selectedShow: JSON.parse(response.target.responseText)});
				}
			}.bind(this);


		fetch('http://tvdb.reali.com/series')
		// fetch('http://api.tvmaze.com/shows/1', myInit)
			.then((result) => {
				if (result.status === 200) {
					return result.json();
				} else {
					return null;
				}
			})
			.then((parsedData) => {
				this.setState({shows: parsedData});
			})
			.catch((err) => {
				console.log(err);
			})

	};

	componentDidUpdate = function () {
		console.log(this.state);
	};

	handleShowClick = function (showId) {
		if(this.getShows.readyState === 0 || this.getShows.readyState === 4) {
			this.getShows.open('GET', 'http://tvdb.reali.com/series/' + showId, true);
			this.getShows.send();
		}
	}.bind(this);

	loadPlayer = (id) => {
		let result = _.find(this.state.selectedShow, (obj) => {
			return obj.id === id;
		});
			result !== undefined &&  this.setState({playerUrl: result.url})
	};

	render() {
		return (
			<div className="Tview container">
				<div className="row">
				<Shows showsList={this.state.shows} onShowClick={this.handleShowClick}/>
				<Episodes episodesList={this.state.selectedShow} onClickEpisode={this.loadPlayer}/>
				<Videoplayer url={this.state.playerUrl}/>
				</div>
			</div>
		);
	}
}

export default Tview;