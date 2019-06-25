import React from 'react';
import { Box, Accordion, AccordionPanel, Text } from 'grommet'

const Info = () => {
  return (
    <Box background="neutral-4" fill={true}>
      <Accordion>
        <AccordionPanel label="What is Happy Valley Pride?">
          <Box pad="medium" background="light-2">
            <Text>One</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Where is Happy Valley Pride?">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};

export default Info;