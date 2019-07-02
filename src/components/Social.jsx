import React from 'react';
import { Box, Box as Icons, Anchor as SocialIconLink, Heading, Paragraph, ThemeContext, Image } from 'grommet'
import { Facebook, Twitter, Instagram } from 'grommet-icons'
// import InstagramEmbed from 'react-instagram-embed';
// import InstagramEmbed from 'react-social-embed'

const instagramImages = [
  "https://scontent-lhr3-1.cdninstagram.com/vp/efe0152004e7a2ba9bb29205d969112b/5DBF5A62/t51.2885-15/sh0.08/e35/s640x640/65822711_522357544969273_4149281244534261233_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com",
  "https://scontent-lhr3-1.cdninstagram.com/vp/261ea61dcc0c2df9757468ef9c6113f9/5DA20AFA/t51.2885-15/e35/65968329_430142797831950_7354951728648025359_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com",
  "https://scontent-lhr3-1.cdninstagram.com/vp/85ac9c2861bcde0a0a7fa7cd1e99957b/5DBA26BE/t51.2885-15/sh0.08/e35/s640x640/65720794_653836901751878_7053148590153445397_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com",
  "https://scontent-lhr3-1.cdninstagram.com/vp/31fc17607da505eaff37bef0359f1b4e/5DAA619C/t51.2885-15/e35/66028711_143821710060463_4812017625892234753_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8"
]

const hashtags = [
  "happyvalleypride", "pride2019", "hebdenbridge"
]

const Social = () => {
  return (
    <Box background="neutral-3" fill={true} direction="column" align="center">
      <ThemeContext.Extend value={{
        paragraph: {
          medium: {
            maxWidth: "80vw"
          }
        }
      }}>
        <Box margin={{ top: "large", bottom: "large" }} width="80vw">
          <Heading level="2" alignSelf="left" margin={{ vertical: "medium" }}>
            Social Media
          </Heading>
          <Paragraph className="mission" margin="none">
            Interact with us on social media!                  
          </Paragraph>
        </Box>
        <Icons direction="row" justify="around" width="80vw">
          <SocialIconLink href="https://www.facebook.com/HappyValleyPride" target="_blank" icon={<Facebook color="white" size="large" />} />
          <SocialIconLink href="https://twitter.com/appyValleyPride" target="_blank" icon={<Twitter color="white" size="large" />} />
          <SocialIconLink href="https://www.instagram.com/happyvalleypride/" target="_blank" icon={<Instagram color="white" size="large" />} />
        </Icons>
        <Box direction="row" wrap={true} width="80vw" height="80vw" justify="around" align="center">
        {instagramImages.map((image) => {
          return (
        <Box height="35vw" width="35vw">
            <Image fit="cover" src={image}/>
        </Box>
          )
        })}
        </Box>
      </ThemeContext.Extend>
    </Box>
  );
};

export default Social;