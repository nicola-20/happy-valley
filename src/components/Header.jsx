import React from 'react';
import { Link } from '@reach/router'
// import '../styling/Header.css'
import { Tabs, Tab, Box } from 'grommet'
import { Icons } from 'grommet-icons'

const Header = () => {
  return (
    <Tabs>
      <Tab title="map">
        <Box>MAP</Box>
      </Tab>
      <Tab title="schedule">
        <Box>SCHEDULE</Box>
      </Tab>
    </Tabs>
    // <header className="Header">
    //   <Link to='/map'>map</Link> | <Link to='/schedule'>schedule</Link> | <Link to='social'>social</Link> | <Link to='info'>info</Link>
    // </header>
  );
};

export default Header;