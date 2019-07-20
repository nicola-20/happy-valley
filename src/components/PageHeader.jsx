import React from 'react';
import { Box, ThemeContext, Paragraph, Heading } from "grommet";

const PageHeader = ({ title, paragraph }) => {
  return (
    <ThemeContext.Extend value={{
      paragraph: {
        medium: {
          maxWidth: "85vw"
        }
      }
    }}>
      <Box width="85vw">
        <Heading level="2" alignSelf="start" margin={{ top: "large", bottom: "small" }} color="white">
          {title}
        </Heading>
        <Paragraph className="top-border-paragraph" margin="none" pad={{top: "small"}} color="white">
          {paragraph}
        </Paragraph>
      </Box>
    </ThemeContext.Extend>
  );
};

export default PageHeader;