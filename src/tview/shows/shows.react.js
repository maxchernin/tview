import React, {Component} from 'react';
import Show from './show/show.react';

// import './Episodes.css';

class Shows extends Component {
  render() {

    const shows = this.props.showsList.map((show) => {

      return (<Show key={show.id} id={show.id} name={show.title} image={show.image} onShowClick={this.props.onShowClick} />)
    });

    return (
      <div className="Shows one-third">
        <div className="panel panel-default">
          <div className="panel-body">
	          {shows}
          </div>
        </div>

      </div>
  )
    ;
  }
}

export default Shows;