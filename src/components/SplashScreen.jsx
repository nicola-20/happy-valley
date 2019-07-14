import React from 'react';
import { Box, Button, Image, 
  // Clock 
} from 'grommet';

const SplashScreen = (props) => {
  const { hideSplashScreen } = props
  return (
    <Box
      full={true}
      height="100vh"
    >
      <Button
        alignSelf="center"
        label="Enter App"
        onClick={hideSplashScreen}
        primary={true}
        hoverIndicator={true}
        margin="medium"
      />
      {/* <Clock time={Date.UTC(2019, 6, 22, 19, 0) - Date.now()} type="digital" run="backward"/> */}
      <Image fit="contain" src="/assets/campaign2019.jpg" />
    </Box>
  );
};

export default SplashScreen;