import React from 'react';
import styled from 'styled-components'
import { Grommet, Tabs, Tab, Box, ThemeContext, Button } from 'grommet'
import { Icons } from 'grommet-icons'
import Social from './Social';
import Map from './Map';
import Schedule from './Schedule';
import Info from './Info';
import { theme } from "../styling/theme";

const tabs = [
  { title: 'map', color: "status-warning", content: <Map /> },
  { title: 'schedule', color: "status-ok", content: <Schedule /> },
  { title: 'social', color: "neutral-3", content: <Social /> },
  { title: 'info', color: "neutral-4", content: <Info /> }
]

const TabApp = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <Box>
      <Box direction="row">
        {tabs.map((tab, index) => {
          return (
            <Button
              label={tab.title}
              // alignSelf="center"
              hoverIndicator={true}
              margin={
                { vertical: "small" }
              }
              primary={true}
              onClick={() => setActiveIndex(index)}
            />
          )
        })}
      </Box>
      <Box>
        {tabs[activeIndex].content}

      </Box>
    </Box>
    // <Tabs height="10vh">
    //   {/* <ThemeContext.Extend
    //     value={{ tab: { background: "status-warning", color: "white" } }}
    //   > */}
    //     <Tab title="map">
    //       <Map />
    //     </Tab>
    //   {/* </ThemeContext.Extend> */}
    //   {/* <ThemeContext.Extend
    //     value={{ tab: { background: "status-ok", color: "white" } }}
    //   > */}
    //     <Tab title="schedule">
    //       <Schedule />
    //     </Tab>
    //   {/*</ThemeContext.Extend>*/}
    //   {/* <ThemeContext.Extend
    //     value={{ tab: { background: "neutral-3", color: "white" } }}
    //   > */}
    //     <Tab title="social">
    //       <Social />
    //     </Tab>
    //   {/*</ThemeContext.Extend>*/}
    //   {/* <ThemeContext.Extend
    //     value={{ tab: { background: "neutral-4", color: "white" } }}
    //   > */}
    //     <Tab title="info">
    //       <Info />
    //     </Tab>
    //   {/*</ThemeContext.Extend>*/}
    // </Tabs>
  );
};

export default TabApp;