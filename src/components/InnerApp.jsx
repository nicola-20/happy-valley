import React, { Component } from "react";
// import "../App.css";
import Header from "./Header";
import Main from "./Main";
import { Box, Layer, Button, Image } from 'grommet';
import SplashScreen from "./SplashScreen";

class InnerApp extends Component {
  state = {
    showSplashscreen: true
  }
  render() {
    const { showSplashscreen } = this.state
    return (
      <Box full={true} height="100vh">
        <Box
          full={true}
          height="100vh"
        >
          <Header />
          <Main />
        </Box>
        <Button label="show" onClick={() => this.setState({ showSplashscreen: true })} />
        {showSplashscreen && (
          <Layer
          animate={true}
          full={true}
          modal={true}
          responsive={true}
          >
            <Box
              full={true}
              height="100vh"
            // border="all"
            >
              < Button
                alignSelf="center"
                label="Enter App"
                onClick={() => this.setState({ showSplashscreen: false })}
                primary={true}
                hoverIndicator={true}
                margin="medium"
              />
              <Image
                fit="contain"
                src="/assets/campaign2019.jpg"
              />
            </Box>
          </Layer>
        )}
      </Box>
    );
  }
}

export default InnerApp;