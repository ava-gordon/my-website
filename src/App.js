import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import Header from './Header'
import Section from './Section'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Section title="About Me" color='teal'></Section>
        <Section title="My Work" color='orange'></Section>
        <Section title="Music" color='deepblue'></Section>
      </div>
    );
  }
}

export default App;
