import React from 'react';
import { Box, Heading, Paragraph } from 'grommet'
import InfoPageHeader from './InfoPageHeader';

const ContactUs = ({ setActiveIndex }) => {
  return (
    <Box background="neutral-4" fill={true} direction="column" align="center">
      <InfoPageHeader title="Contact Us" setActiveIndex={setActiveIndex} />
      <Box width="85vw" height="80vh" direction="column " overflow="scroll" className="top-border-paragraph" margin={{ "vertical": "medium", "horizontal": "none" }}>
        <Heading level="5" margin={{ top: "large", bottom: "small", horizontal: "none" }}>Email:</Heading>
        <Paragraph margin="none">info@happyvalleypride.com</Paragraph>
        <Heading level="5" margin={{ top: "large", bottom: "small", horizontal: "none" }}>Phone:</Heading>
        <Paragraph margin="none">01422 400 406</Paragraph>
        <Heading level="5" margin={{ top: "large", bottom: "small", horizontal: "none" }}>Postal:</Heading>
        <Paragraph margin="none">Happy Valley Pride <br />
          Unit 2D, <br />
          Beehive Mills <br />
          Hebble End <br />
          HX7 6HJ
      </Paragraph>
      </Box>
    </Box>
  );
};

export default ContactUs;