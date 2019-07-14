import React from 'react';
import { Box as TabBar, Box, ThemeContext, Button as Tab } from 'grommet'
import Schedule from './Schedule';
import Social from './Social';
import Info from './Info';
import Map from './Map';

const TabApp = () => {
  const tabs = [
    { title: 'Map', color: "status-warning", content: <Map /> },
    { title: 'Schedule', color: "status-ok", content: <Schedule /> },
    { title: 'Social', color: "neutral-3", content: <Social /> },
    { title: 'Info', color: "neutral-4", content: <Info /> }
  ]
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <Box full={true} height="100vh">
      <TabBar direction="row" margin="0.2vh 0px 0px 0px" width="100vw" justify="around" height="7vh">
        {tabs.map((tab, index) => {
          return (
            <ThemeContext.Extend key={index} value={{ button: { border: { radius: "13px 13px 0px 0px" }, padding: { horizontal: "0px" }, color: "white" } }}>
              <Tab className="tabButton" label={tab.title} hoverIndicator={true} primary={true} color={tab.color} onClick={() => setActiveIndex(index)} />
            </ThemeContext.Extend>
          )
        })}
      </TabBar>
      {tabs[activeIndex].content}
    </Box>
  );
};

export default TabApp;