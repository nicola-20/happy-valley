import React from 'react';
import { Box, Accordion, AccordionPanel, Text, Button, ThemeContext, Heading, Paragraph, Image, Stack } from 'grommet'

const supporters = [
  { name: 'The Brunswick Centre', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2015/12/Artboard-8-320x320.png' },
  { name: 'Trades Club', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2015/12/Artboard-7-320x320.png' },
  { name: 'The Yorkshire Soap Company', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2017/03/Sponsor-The-Yorkshire-Soap-Company-320x320.png' },
  { name: 'Hebden Bridge Picture House', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2017/03/Sponsor-Hebden-Bridge-Picture-House-320x320.png' },
  { name: 'Nelsons Wine Bar', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2017/03/Sponsor-Nelsons-Wine-Bar-320x320.png' },
  { name: 'Town Hall Hebden Bridge', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2017/03/Sponsor-Hebden-Bridge-Town-Hall-320x320.png' },
  { name: 'Hebden Royd Town Council', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2015/12/Artboard-2-320x320.png' },
  { name: 'Calderdale Council', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2017/03/Sponsor-Calderdale-Council-320x320.png' },
  { name: 'Hebden Bridge Little Theatre', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2015/12/Sponsor-Little-Theatre-320x320.png' },
  { name: 'CressWells', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2017/03/Sponsor-Cresswells-320x320.png' },
  { name: 'Hebden Radio', logo: 'https://www.happyvalleypride.co.uk/wp-content/uploads/2015/12/Sponsor-Hebden-Radio-320x320.png' }
];

const FAQs = [
  { question: 'What is Happy Valley Pride?', answer: 'Answer' },
  { question: 'Where is Happy Valley Pride?', answer: 'Another answer' },
  { question: 'Another question that is frequently asked?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
];

const Info = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  // console.log(activeIndex)
  const infoScreens = [
    {
      title: 'info buttons', content:
        <Box background="neutral-4" fill={true}
          direction="column"
          align="center"
        >
          <ThemeContext.Extend value={{
            button: {
              primary: {
                color: "white"
              },
              border: { color: "white", width: "0" }, color: "neutral-4", padding: {
                vertical: "10px", horizontal: "10px"
              }
            },
            text: {
              medium: {
                size: "22px",
              }
            },
            paragraph: {
              medium: {
                maxWidth: "80vw"
              }
            }
          }}>
            <Box margin={{top: "large", bottom: "large"}}>
              <Heading level="2" alignSelf="start" margin={{vertical: "small"}}>
                Our Mission
                </Heading>
              <Paragraph className="top-border-paragraph" margin="none">
                We celebrate LGBT+ life in Hebden Bridge and surrounding areas. Promoting equality and diversity to eradicate discrimination, based on sexual orientation and gender identity, through education and engagement.
                  </Paragraph>
            </Box>
            <Box direction="column" justify="evenly" align="center" height="50vh">
            <Button className="infoButton" primary={true} label="About Us" onClick={() => setActiveIndex(1)} />
            <Button className="infoButton" primary={true} label="FAQs" onClick={() => setActiveIndex(2)} />
            <Button className="infoButton" primary={true} label="Supporters" onClick={() => setActiveIndex(3)} />
            <Button className="infoButton" primary={true} label="Contact Us" onClick={() => setActiveIndex(4)} />
            </Box>
          </ThemeContext.Extend>
        </Box>
    },
    {
      title: 'about us', content:
        <Box background="neutral-4" fill={true} direction="column"
          align="center">
          <Box width="80vw" margin={{ top: "large" }} align="center">
            <Stack anchor="left" fill={true}>
              <Box fill="horizontal" justify="center"><Heading level="2" margin={{top: "medium", bottom: "none", horizontal:"none"}} textAlign="center">About Us</Heading></Box>
              <Button label={<Heading level="2" margin={{ left: "small", bottom: "none", top: "medium" }}>&lt;</Heading>} plain={true} margin="none" onClick={() => setActiveIndex(0)} />
            </Stack>
          </Box>
          <ThemeContext.Extend value={{
            // button: {}
            //   primary: {
            //     color: "white"
            //   },
            //   border: { color: "white", width: "0" }, color: "neutral-4", padding: {
            //     vertical: "10px", horizontal: "10px"
            //   }
            // },
            // text: {
            //   medium: {
            //     size: "22px",
            //   }
            // },
            paragraph: {
              medium: {
                maxWidth: "80vw"
              }
            }
          }}>
            <Paragraph className="top-border-paragraph">
              It all started in response to a piece of homophobic graffiti in the Hebden Bridge Town Centre during 2016, now it’s a annual festival bringing people together.
              Happy Valley Pride was born when local residents witnessed homophobic graffiti sprayed on a piece of tarpaulin by the Hebden Bridge Town Hall, during the summer of 2015. It was a stark reminder that there’s still work to be done – a casual phrase, that has been knocking around school playgrounds for decades, it was none-the-less shocking, simply because it is still in use in our seemingly, tolerant and open-minded community.
          </Paragraph>
          </ThemeContext.Extend>
        </Box>
    },
    {
      title: 'faqs', content:
        <Box background="neutral-4" fill={true} direction="column" align="center">
          <Box width="80vw" margin={{ top: "large" }} align="center">
            <Stack anchor="left" fill={true}>
              <Box fill="horizontal" justify="center"><Heading level="2" margin={{top: "medium", bottom: "none", horizontal:"none"}} textAlign="center">FAQs</Heading></Box>
              <Button label={<Heading level="2" margin={{ left: "small", bottom: "none", top: "medium" }}>&lt;</Heading>} plain={true} margin="none" onClick={() => setActiveIndex(0)} />
            </Stack>
          </Box>
          <Box width="80vw">
            <Accordion className="top-border-paragraph" margin={{"vertical": "medium", "horizontal": "none"}}>
              {FAQs.map((FAQ, index) => {
                return (
                  <AccordionPanel label={FAQ.question} key={index}>
                    <Box pad="medium" background="light-2">
                      <Text>{FAQ.answer}</Text>
                    </Box>
                  </AccordionPanel>
                )
              })}
            </Accordion>
          </Box>
        </Box>
    },
    {
      title: 'supporters', content:
        <Box background="neutral-4" fill={true} direction="column" align="center">
          <Box width="80vw" margin={{ top: "large" }} align="center">
            <Stack anchor="left" fill={true}>
              <Box fill="horizontal" justify="center"><Heading level="2" margin={{top: "medium", bottom: "none", horizontal:"none"}}  textAlign="center">Supporters</Heading></Box>
              <Button label={<Heading level="2" margin={{ left: "small", bottom: "none", top: "medium" }}>&lt;</Heading>} plain={true} margin="none" onClick={() => setActiveIndex(0)} />
            </Stack>
          </Box>
          <Box direction="row" width="80vw" height="80vh" className="top-border-paragraph" wrap={true} align="center" alignContent="around" justify="around" overflow="scroll" margin={{"vertical": "medium", "horizontal": "none"}}>
            {supporters.map((supporter, index) => {
              return (
                <Box key={index} height="small" width="small" margin={{ vertical: "small", horizontal: "medium" }} >
                  <Image fit="contain" src={supporter.logo} a11yTitle={supporter.name} />
                </Box>

              )
            })}
          </Box>
        </Box>
    },
    {
      title: 'contact us', content:
        <Box background="neutral-4" fill={true} direction="column" align="center">
        <Box width="80vw" margin={{ top: "large" }} align="center">
          <Stack anchor="left" fill={true}>
            <Box fill="horizontal" justify="center"><Heading level="2" margin={{top: "medium", bottom: "none", horizontal:"none"}}  textAlign="center">Contact Us</Heading></Box>
            <Button label={<Heading level="2" margin={{ left: "small", bottom: "none", top: "medium" }}>&lt;</Heading>} plain={true} margin="none" onClick={() => setActiveIndex(0)} />
          </Stack>
        </Box>
        <Box width="80vw" height="80vh" direction="column " overflow="scroll" className="top-border-paragraph" margin={{"vertical": "medium", "horizontal": "none"}}>
          <Heading level="5" margin={{top: "large", bottom: "small", horizontal: "none"}}>Email:</Heading>
          <Paragraph margin="none">info@happyvalleypride.com</Paragraph>
          <Heading level="5" margin={{top: "large", bottom: "small", horizontal: "none"}}>Phone:</Heading>
          <Paragraph margin="none">01422 400 406</Paragraph>
          <Heading level="5" margin={{top: "large", bottom: "small", horizontal: "none"}}>Postal:</Heading>
          <Paragraph margin="none">Happy Valley Pride <br/>
              Unit 2D, <br/>
              Beehive Mills <br/>
              Hebble End <br/>
              HX7 6HJ
          </Paragraph>
        </Box>
      </Box>
    },
  ]
  return (
    infoScreens[activeIndex].content
  );
};

export default Info;