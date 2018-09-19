import React, { Component } from 'react';
import './App.css';
import Head from "./Components/Head Components/Head";
import Especialista from "./Components/Especialista/Especialista";
import Metodologia from "./Components/Metodologia/Metodologia";
import PrimeiraAula from "./Components/PrimeiraAula/PrimeiraAula";
import TodosPublicos from "./Components/TodosPublicos/TodosPublicos";
import BeforFooter from "./Components/BeforFooter/BeforFooter";
import Footer from "./Components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Especialista />
        <Metodologia />
        <PrimeiraAula />
        <TodosPublicos />
        <BeforFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
