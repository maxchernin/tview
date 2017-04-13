import React, {Component} from 'react';
import Episode from './episode/episode.react'
// import './Episodes.css';

class Episodes extends Component {
  constructor(props){
    super();
  }


  render() {
    const episodes = this.props.episodesList !== null ? this.props.episodesList.map((obj) => {
	    return (<Episode key={obj.id} id={obj.id} title={obj.title} onClickEpisode={this.props.onClickEpisode}/> )
    }) : 'Click on a show to watch an episode';
    return (
      <div className="Episodes one-third">
        <div className="panel panel-default">
          <div className="panel-body">
	          {episodes}
          </div>
        </div>
      </div>
  )
    ;
  }
}

export default Episodes;