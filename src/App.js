import React, { Component } from 'react';
import './App.css';
import Head from "./Components/Head Components/Head";
import Especialista from "./Components/Especialista/Especialista";
import Metodologia from "./Components/Metodologia/Metodologia";
import PrimeiraAula from "./Components/PrimeiraAula/PrimeiraAula";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Especialista />
        <Metodologia />
        <PrimeiraAula />
      </div>
    );
  }
}

export default App;
