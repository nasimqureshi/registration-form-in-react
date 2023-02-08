import React, { Component } from 'react';
import './App.css';
import Register from "./Components/Register";
import Greet from "./Components/Greet";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isRegister: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.isRegister ? <Greet></Greet> : <Register></Register>}
        <Greet />
        <Register />
      </div>
    )
  }
}

export default App

