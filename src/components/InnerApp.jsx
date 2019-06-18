import React, { Component } from "react";
// import "../App.css";
import Header from "./Header";
import Main from "./Main";
import { Box } from 'grommet';

class InnerApp extends Component {
  render() {
    return (
      <Box
        full={true}
        height="100vh"
      >
        <Header />
        <Main />
      </Box>
    );
  }
}

export default InnerApp;