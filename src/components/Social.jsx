import React from 'react';
import { Box, Box as Icons, Anchor as SocialIconLink, Heading, Paragraph, ThemeContext, Image } from 'grommet'
import { Facebook, Twitter, Instagram } from 'grommet-icons'
import PageHeader from './PageHeader';
import { fetchInstagramImages } from '../api'
// import InstagramEmbed from 'react-instagram-embed';
// import InstagramEmbed from 'react-social-embed'

// const instagramImages = [
//   "https://scontent-lhr3-1.cdninstagram.com/vp/efe0152004e7a2ba9bb29205d969112b/5DBF5A62/t51.2885-15/sh0.08/e35/s640x640/65822711_522357544969273_4149281244534261233_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com",
//   "https://scontent-lhr3-1.cdninstagram.com/vp/261ea61dcc0c2df9757468ef9c6113f9/5DA20AFA/t51.2885-15/e35/65968329_430142797831950_7354951728648025359_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com",
//   "https://scontent-lhr3-1.cdninstagram.com/vp/85ac9c2861bcde0a0a7fa7cd1e99957b/5DBA26BE/t51.2885-15/sh0.08/e35/s640x640/65720794_653836901751878_7053148590153445397_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com",
//   "https://scontent-lhr3-1.cdninstagram.com/vp/31fc17607da505eaff37bef0359f1b4e/5DAA619C/t51.2885-15/e35/66028711_143821710060463_4812017625892234753_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com&se=8"
// ]

// const hashtags = [
//   "happyvalleypride", "pride2019", "hebdenbridge"
// ]

const Social = () => {
  const [instagramImages, setInstagramImages] = React.useState([])

  React.useEffect(() => {
    fetchInstagramImages().then(({ items }) => {
      const images = items.map(({ fields: { ...imageFields } }) => {
        return {
          ...imageFields
        }
      })
      console.log(images)
      setInstagramImages(images)
    })
  }, [])

  return (
    <Box background="neutral-3" fill={true} direction="column" align="center">
      <PageHeader title="Social Media" paragraph="" />
      <Icons direction="row" justify="around" width="85vw" margin={{ top: "large" }}>
        <SocialIconLink href="https://www.facebook.com/HappyValleyPride" target="_blank" icon={<Facebook color="white" size="large" />} />
        <SocialIconLink href="https://twitter.com/appyValleyPride" target="_blank" icon={<Twitter color="white" size="large" />} />
        <SocialIconLink href="https://www.instagram.com/happyvalleypride/" target="_blank" icon={<Instagram color="white" size="large" />} />
      </Icons>
      <Box direction="row" wrap={true} width="85vw" height="80vw" justify="around" align="center">
        {instagramImages.sort((a, b) => {
          return a.date - b.date
        }).map((image, index) => {
          return (
            <Box height="35vw" width="35vw" key={index}>
              <ThemeContext.Extend value={{
                image: {
                  extend: "border: solid 0px white; border-radius: 10px;"
                }
              }}>
                <Image className="instagram-image" fit="contain" src={image.image_url} />
              </ThemeContext.Extend>
            </Box>
          )
        })}
      </Box>
      {/* <Box className='embedsocial-instagram' data-ref="50088bfe78e450750b15d48ce615c1e83463cf82"> </Box> */}

      {/* <div class='embedsocial-instagram' data-ref="50088bfe78e450750b15d48ce615c1e83463cf82"></div>
        <script src="https://embedsocial.com/embedscript/in.js" async='true'></script> */}
      {/* <script>(function(d, s, id){var js; if (d.getElementById(id)) {return ;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/embedscript/in.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialInstagramScript"));</script> */}

    </Box>
  );
};

export default Social;