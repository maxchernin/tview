/**
 * Created by maxim.chernin on 12/4/17.
 */
import React, {Component} from 'react';


class Episode extends Component {
	constructor(props){
		super();
	}

	handleEpisodeClick = function () {
		this.props.onClickEpisode(this.props.id)
	}.bind(this);

	render() {
		return (
			<div className="Episode" onClick={this.handleEpisodeClick}>
				<span className="glyphicon glyphicon-play-circle">{this.props.title}</span>
			</div>
		)
			;
	}
}

export default Episode;
