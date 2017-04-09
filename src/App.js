import React, { Component } from 'react';
import './App.css';
import Tview from "./tview/tview.react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <Tview/>
      </div>
    );
  }
}

export default App;
