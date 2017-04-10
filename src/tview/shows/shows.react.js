import React, {Component} from 'react';
import Show from './show/show.react';

// import './Episodes.css';

class Shows extends Component {
  render() {

    const shows = this.props.showsList.map((show) => {

      return (<Show key={show.id} name={show.name} image={show.image.medium} />)
    });

    return (
      <div className="Shows">
        {shows}
      </div>
  )
    ;
  }
}

export default Shows;