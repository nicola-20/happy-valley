import React, { Component } from "react";
import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
import SplashScreen from "./components/SplashScreen";
import { Router } from "@reach/router";
import InnerApp from "./components/InnerApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <Main /> */}
        <Router>
        <SplashScreen path='/'/>
        <InnerApp path='/*' />
        </Router>
      </div>
    );
  }
}

export default App;