import React from 'react';
import { Link } from '@reach/router'
import { Box, Button, Grommet, Image } from 'grommet';
// import image from '../../'

const SplashScreen = () => {
  return (
    <Box
      full={true}
      height="100vh"
      // border="all"
    >
      < Button
        alignSelf="center"
        label="Enter App"
        onClick={() => { }}
        href="/map"
        primary={true}
        hoverIndicator={true}
        margin="medium"
      />
      <Image
        fit="contain"
        src="/assets/campaign2019.jpg"
      />
    </Box>
  );
};

export default SplashScreen;