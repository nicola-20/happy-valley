import React from 'react';
import { Box as InfoButtonsContainer, Box as Page, Button as InfoButton, ThemeContext } from 'grommet'
import PageHeader from './PageHeader';

const InfoButtons = ({ setActiveIndex }) => {
  return (
    <Page background="neutral-4" fill={true}
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
            maxWidth: "85vw"
          }
        }
      }}>
        <PageHeader title="Our Mission" paragraph=" We celebrate LGBT+ life in Hebden Bridge and surrounding areas. Promoting equality and diversity to eradicate discrimination, based on sexual orientation and gender identity, through education and engagement." />
        <InfoButtonsContainer direction="column" justify="evenly" align="center" height="70vh">
          <InfoButton className="infoButton" primary={true} label="About Us" onClick={() => setActiveIndex(1)} />
          <InfoButton className="infoButton" primary={true} label="FAQs" onClick={() => setActiveIndex(2)} />
          <InfoButton className="infoButton" primary={true} label="Merchandise" target="_blank" href="https://www.happyvalleypride.co.uk/shop/" />
          <InfoButton className="infoButton" primary={true} label="Supporters" onClick={() => setActiveIndex(3)} />
          <InfoButton className="infoButton" primary={true} label="Contact Us" onClick={() => setActiveIndex(4)} /> 
        </InfoButtonsContainer>
      </ThemeContext.Extend>
    </Page>
  );
};

export default InfoButtons;