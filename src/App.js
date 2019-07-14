import React from "react";
import { Grommet, Layer } from "grommet";
import { theme } from "./styling/theme.js";
import TabApp from "./components/TabApp";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = React.useState(true)
  return (
    <Grommet theme={theme} full={true}>
      <TabApp />
      {showSplashScreen && (
        <Layer full={true} modal={true} responsive={true}>
          <SplashScreen hideSplashScreen={() => { setShowSplashScreen(false) }} />
        </Layer>
      )}
    </Grommet>
  );
}

export default App;
