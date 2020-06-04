import React, { Component } from 'react';
import './css/App.css';
import ApiCalls from "./ApiCalls";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
        <NavBar/>
        <Hero/>
        <SearchSection/>
        <AboutMe/>
        <Footer/>
        </div>
      </div>
    );
  }
}

function NavBar(){
  return (
    <nav className="navbar">
      <img src="img/logo.svg" alt="happy-news logo" className="logo"/>
      <h6 id="logo-text">happy news</h6>
      <div className="links">
        <a className="active" href="#">Home</a>
        <a href="#">Contact</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
}

function Hero(){
  return (
    <div className="hero" alt="Colorful confetti falling down with a teal background (@ninjason on unsplash) ">
      <h1>let's focus on the <span>good</span> news</h1>
    </div>
  );
}

class SearchSection extends Component {
  constructor(props){
    super(props);
    this.state = {showing:"dog"};
  }


  render(){ return (
    <div className="search-section">
      <h2><span>good</span> news is a click away</h2>
      <div className="search-chips" id="search-ch">
        <button className="button" id="dogBtn" > <span role="img" aria-label="dog">🐶</span> Puppies</button>
        <button className="button" id="catBtn" > <span role="img" aria-label="cat">🐱</span>Kittens</button>
        <button className="button" id="bbBtn" > <span role="img" aria-label="baby">👶</span>Babies</button>
        <button className="button"  id="envBtn"> <span role="img" aria-label="leaf">🌱</span>Environment</button>
      </div>
      <DogElements/>
    </div>
  );
  }
}

function Articles(props){
  switch (props.element) {
    case "dog":
      return (<DogElements/>);
    case "cat":
      return (<CatElements/>);
    case "bb":
      return (<BabyElements/>);
    case "env":
      return (<EnvElements/>);
    }
    return null;
}

function AboutMe(){
  return (
    <div className="about">
      <h2>spreading <span>good</span> news<br></br>one result at a time</h2>

      <div className="mission">
        <h5>my mission</h5>
        <p>I just didn't want to wake up to more news about COVID 19, so here's a website full of
      cute and positive things to help people get a break from the news fatigue. So here's a website without any
      updates on the pandemic. I hope you find what you're looking for!</p>
      </div>
      <div className="whoami">
        <h5>who i am</h5>
        <p>I'm just a developer based in Seattle with a laptop and some design dreams.</p>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <div className="footer">
    <p>Copyright 2020</p>
    </div>
  );
}



function DogElements(){
  return(
    <ApiCalls url="https://newsapi.org/v2/everything?q=%22dog%22%20OR%20dogs%20OR%20puppy%20OR%20puppies%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c"/>
  );
}

function CatElements(){
  return(
    <ApiCalls url="https://newsapi.org/v2/everything?q=%22cat%22%20OR%20cats%20OR%20kitten%20OR%20kittens%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c"/>
  );
}

function BabyElements(){
  return(
    <ApiCalls url="https://newsapi.org/v2/everything?q=%22baby%22%20OR%20babies%20OR%20child%20OR%20children%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c"/>
  );
}

function EnvElements(){
  return(
    <ApiCalls url="https://newsapi.org/v2/everything?q=%22environment%22%20OR%20nature%20NOT%20%22COVID-19%22%20NOT%20%22coronavirus%22%20NOT%20%22quarantine%22&apiKey=abb657dbf02941289a4e3c844b2f644c"/>
  );
}


export default App;
