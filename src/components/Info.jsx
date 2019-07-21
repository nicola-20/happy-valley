import React from 'react';
import InfoButtons from './InfoButtons'
import AboutUs from './AboutUs'
import FAQs from './FAQs'
import Supporters from './Supporters'
import ContactUs from './ContactUs'

const Info = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const screens = [
    { title: 'Our Mission', content: <InfoButtons setActiveIndex={setActiveIndex} /> },
    { title: 'About Us', content: <AboutUs setActiveIndex={setActiveIndex} /> },
    { title: 'FAQs', content: <FAQs setActiveIndex={setActiveIndex} /> },
    { title: 'Supporters', content: <Supporters setActiveIndex={setActiveIndex} /> },
    { title: 'Contact Us', content: <ContactUs setActiveIndex={setActiveIndex} /> }
  ]
  return screens[activeIndex].content;
};

export default Info;