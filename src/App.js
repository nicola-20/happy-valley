import React, { Component } from "react";
import { Grommet } from 'grommet';
// import "./App.css";
import SplashScreen from "./components/SplashScreen";
import { Router } from "@reach/router";
import InnerApp from "./components/InnerApp";
import { theme } from './styling/theme.js'

class App extends Component {
  render() {
    return (
      <Grommet theme={theme}>
      {/* <div className="App"> */}
        <Router>
          <SplashScreen path='/' />
          <InnerApp path='/*' />
        </Router>
        {/* </div> */}
      </Grommet>
    );
  }
}

export default App;