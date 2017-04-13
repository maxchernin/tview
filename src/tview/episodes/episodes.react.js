import React, {Component} from 'react';
import Episode from './episode/episode.react'
// import './Episodes.css';

class Episodes extends Component {
  constructor(props){
    super();
  }


  render() {
    const episodes = this.props.episodesList.map((obj) => {
	    return (<Episode key={obj.id} id={obj.id} title={obj.title} onClickEpisode={this.props.onClickEpisode}/> )
    });
    return (
      <div className="Episodes align col-md-4 col-sm-6 col-xs-6">
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