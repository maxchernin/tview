import React, {Component} from 'react';
// import './App.css';

class Show extends Component {
  render() {
    return (
      <div className="Show">
        <img src={this.props.image} alt={this.props.name} />
        {this.props.name}
      </div>
  );
  }
}

export default Show;