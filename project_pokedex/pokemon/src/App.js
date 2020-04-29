import React, { Component } from 'react';
import './App.css';
import Pokegame from './Pokegame';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
import StateClicker from './StateClicker';

class App extends Component{

  render(){
    return(
      <div className="App">
        {/* <Pokegame /> */}
        {/* <Rando maxNum={7}/> */}
        {/* <Button /> */}
        {/* <BrokenClick /> */}
        <StateClicker />
      </div>
    )
  }
}

export default App;
