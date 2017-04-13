import React, {Component} from 'react';
import "../../../node_modules/video-react/dist/video-react.css";
import { Player, LoadingSpinner } from 'video-react';
// import './Episodes.css';

class Videoplayer extends Component {
	constructor(props){
		super();
	}


	render() {
		const videoFrame = this.props.url ? <Player src={this.props.url}
		                                            autoPlay="true"><LoadingSpinner /></Player> : 'Click on an episode to watch';
		return (
            <div className="Player align col-md-4 col-sm-12 col-xs-12">
	            <div className="panel panel-default">
		            <div className="panel-body">
			            {videoFrame}
		            </div>
	            </div>
            </div>
		);
	}
}

export default Videoplayer;