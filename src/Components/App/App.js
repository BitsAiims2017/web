import React, { Component } from "react";
import { Input } from 'semantic-ui-react'
import Login from "../Login/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login />
      </div>
    );
  }
}

export default App;
