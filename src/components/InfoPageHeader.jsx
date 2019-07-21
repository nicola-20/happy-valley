import React from 'react';
import { Box, Button, Heading, Stack } from 'grommet'

const InfoPageHeader = ({ title, setActiveIndex }) => {
  return (
    <Box width="85vw" margin={{ top: "large" }} align="center">
      <Stack anchor="left" fill={true}>
        <Box fill="horizontal" justify="center"><Heading level="2" margin={{ top: "medium", bottom: "none", horizontal: "none" }} textAlign="center">{title}</Heading></Box>
        <Button label={<Heading level="2" margin={{ left: "small", bottom: "none", top: "medium" }}>&lt;</Heading>} plain={true} margin="none" onClick={() => setActiveIndex(0)} />
      </Stack>
    </Box>
  );
};

export default InfoPageHeader;