import React, {Component} from 'react';
// import './App.css';

class Show extends Component {
  handleShowClick = function () {
	  this.props.onShowClick(this.props.id);
  }.bind(this);

  render() {
    return (
      <div className="Show" onClick={this.handleShowClick}>
        <img src={this.props.image} width="60px" alt={this.props.name} />
          <span>{this.props.name}</span>
      </div>
  );
  }
}

export default Show;