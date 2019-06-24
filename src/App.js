import React, { Component } from "react";
import { Grommet, Box, Layer, Button, Image } from "grommet";
// import "./App.css";
import { theme } from "./styling/theme.js";
import TabApp from "./components/TabApp";

class App extends Component {
  state = {
    showSplashscreen: true
  };
  render() {
    const { showSplashscreen } = this.state;
    return (
      <Grommet theme={theme} cssVars={true}>
        <Box full={true} height="100vh">

        {/* App */}
          <Box full={true} height="100vh">
            <TabApp />
          </Box>

          {/* SplashScreen */}
          {showSplashscreen && (
            <Layer animate={true} full={true} modal={true} responsive={true}>
              <Box
                full={true}
                height="100vh"
                // border="all"
              >
                <Button
                  alignSelf="center"
                  label="Enter App"
                  onClick={() => this.setState({ showSplashscreen: false })}
                  primary={true}
                  hoverIndicator={true}
                  margin="medium"
                />
                <Image fit="contain" src="/assets/campaign2019.jpg" />
              </Box>
            </Layer>
          )}

        </Box>
      </Grommet>
    );
  }
}

export default App;