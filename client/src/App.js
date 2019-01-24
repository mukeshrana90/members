import React, { Component } from 'react';
import './sass/main.scss'
import Members from './components/Members'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
       <Members />              
      </div>
    );
  }
}

export default App;
