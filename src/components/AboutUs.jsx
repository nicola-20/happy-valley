import React from 'react';
import { Box, ThemeContext, Paragraph } from 'grommet'
import InfoPageHeader from './InfoPageHeader';

const AboutUs = ({ setActiveIndex }) => {
  return (
    <Box background="neutral-4" fill={true} direction="column"
      align="center">
      <InfoPageHeader title="About Us" setActiveIndex={setActiveIndex} />
      <ThemeContext.Extend value={{
        paragraph: {
          medium: {
            maxWidth: "85vw"
          }
        }
      }}>
        <Paragraph className="top-border-paragraph">
          It all started in response to a piece of homophobic graffiti in the Hebden Bridge Town Centre during 2016, now it’s a annual festival bringing people together.
          Happy Valley Pride was born when local residents witnessed homophobic graffiti sprayed on a piece of tarpaulin by the Hebden Bridge Town Hall, during the summer of 2015. It was a stark reminder that there’s still work to be done – a casual phrase, that has been knocking around school playgrounds for decades, it was none-the-less shocking, simply because it is still in use in our seemingly, tolerant and open-minded community.
          </Paragraph>
      </ThemeContext.Extend>
    </Box>
  );
};

export default AboutUs;