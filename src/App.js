import React, { Component } from 'react';
import './App.css';
import Head from "./Components/Head Components/Head";
import Metodologia from "./Components/Metodologia/Metodologia";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Metodologia/>
      </div>
    );
  }
}

export default App;
