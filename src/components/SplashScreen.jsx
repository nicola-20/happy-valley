import React from 'react';
import { Box, Box as ImageContainer, Image } from 'grommet';

const SplashScreen = (props) => {
  const { hideSplashScreen } = props
  return (
    <Box
      full={true}
      height="100vh"
      direction="column"
      align="center"
      justify="around"
      pad={{ vertical: "large" }}
    >
      <ImageContainer height="15vh">
        <Image fit="contain" src="/assets/welcome2.png" />
      </ImageContainer>
      <ImageContainer height="40vh">
        <Image className="entry-logo" onClick={hideSplashScreen} hoverIndicator={true} fit="contain" src="/assets/welcome-logo.png" />
      </ImageContainer>
      <ImageContainer height="20vh">
        <Image fit="contain" src="/assets/date.png" />
      </ImageContainer>
    </Box>
  );
};

export default SplashScreen;