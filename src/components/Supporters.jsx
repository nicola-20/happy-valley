import React from 'react';
import { Box, Image } from 'grommet'
import { getSupporters } from '../api'
import InfoPageHeader from './InfoPageHeader'

const Supporters = ({ setActiveIndex }) => {
  const [supporters, setSupporters] = React.useState([])
  React.useEffect(() => {
    getSupporters().then((supporters) => {
      console.log(supporters)
      setSupporters(supporters)
    })
  }, [])
  return (
    <Box background="neutral-4" fill={true} direction="column" align="center">
      <InfoPageHeader title="Supporters" setActiveIndex={setActiveIndex} />
      <Box direction="row" width="85vw" height="80vh" className="top-border-paragraph" wrap={true} align="center" alignContent="around" justify="around" overflow="scroll" margin={{ "vertical": "medium", "horizontal": "none" }}>
        {supporters.map((supporter, index) => {
          return (
            <Box key={index} height="small" width="small" margin={{ vertical: "small", horizontal: "medium" }} >
              <Image fit="contain" src={supporter.logo.fields.file.url} a11yTitle={supporter.name} />
            </Box>

          )
        })}
      </Box>
    </Box>
  );
};

export default Supporters;