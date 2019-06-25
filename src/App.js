import React, { Component } from "react";
import { Grommet, Layer } from "grommet";
import { theme } from "./styling/theme.js";
import TabApp from "./components/TabApp";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

class App extends Component {
  state = {
    showSplashScreen: true
  };
  render() {
    const { showSplashScreen } = this.state;
    return (
      <Grommet theme={theme} full={true}>
        <TabApp />
        {showSplashScreen && (
          <Layer full={true} modal={true} responsive={true}>
            <SplashScreen hideSplashScreen={this.hideSplashScreen} />
          </Layer>
        )}
      </Grommet>
    );
  }
  hideSplashScreen = () => {
    this.setState({ showSplashScreen: false });
  };
}

export default App;
