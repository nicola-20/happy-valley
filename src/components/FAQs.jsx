import React from 'react';
import { Box, Box as Page, Accordion, AccordionPanel, Markdown, ThemeContext } from 'grommet'
import { getFAQs } from '../api'
import InfoPageHeader from './InfoPageHeader';

const FAQs = ({ setActiveIndex }) => {
  const [faqs, setFaqs] = React.useState([])
  React.useEffect(() => {
    getFAQs().then((faqs) => {
      setFaqs(faqs)
    })
  })
  return (
    <Page background="neutral-4" fill={true} direction="column" align="center">
      <InfoPageHeader title="FAQs" setActiveIndex={setActiveIndex} />
      <Box className="top-border-paragraph" width="85vw" height="80vh" overflow="scroll" margin={{ "vertical": "medium", "horizontal": "none" }}>
        <Accordion>
          {faqs.map((faq, index) => {
            return (
              <AccordionPanel label={faq.question} key={index}>
                <Box pad="medium" background="light-2">
                  <Markdown>{faq.answer}</Markdown>
                </Box>
              </AccordionPanel>
            )
          })}
        </Accordion>
      </Box>
    </Page>
  );
};

export default FAQs;