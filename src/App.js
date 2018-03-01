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
        <Section title="ABOUT ME">
          <div className='about-subsection'>
            <img className='about-image' src={require('./images/fiat_slug.png')} />
            <div className='about-text text-right'>
              After four magical, but challenging, years, I graduated from UC Santa Cruz in 2015, with a degree in Computer Science. 
            </div>

          </div>
          <div className='about-subsection'>
            <div className='about-text'>
              I worked at a small B2B marketing company called Wheelhouse, before moving on to cut my teeth on some full stack dev work at GoFundMe.
            </div>
            <img className='about-image' src={require('./images/gofundme.png')} />
          </div>
          <div className='about-subsection'>
            <img />
            Currently looking for the next adventure!
          </div>
        </Section>
        <Section title="MY WORK"></Section>
        <Section title="MUSIC"></Section>
      </div>
    );
  }
}

export default App;
