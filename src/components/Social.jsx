import React from 'react';
import { Box as Page, Box as Content, Box as Icons, Box as Hashtags, Anchor as SocialIconLink, Box as ImageContainer, Box as InstagramImages, Heading as Hashtag, ThemeContext, Image, Anchor } from 'grommet'
import { Facebook, Twitter, Instagram } from 'grommet-icons'
import PageHeader from './PageHeader';
import { getInstagramImages, getHashtags } from '../api'
// import InstagramEmbed from 'react-instagram-embed';
// import InstagramEmbed from 'react-social-embed'

const Social = () => {
  const [instagramImages, setInstagramImages] = React.useState([])
  const [hashtags, setHashtags] = React.useState([])

  React.useEffect(() => {
    getInstagramImages().then((images) => {
      setInstagramImages(images)
    })
    getHashtags().then((hashtags) => {
      setHashtags(hashtags)
    })
  }, [])

  return (
    <Page background="neutral-3" fill={true} direction="column" align="center">
      <PageHeader title="Social Media" paragraph="" />
      <Content height="80vh" width="85vw" direction="column" justify="around" align="center">
        <Icons direction="row" justify="around" width="85vw">
          <SocialIconLink href="https://www.facebook.com/HappyValleyPride" target="_blank" icon={<Facebook color="white" size="large" />} />
          <SocialIconLink href="https://twitter.com/appyValleyPride" target="_blank" icon={<Twitter color="white" size="large" />} />
          <SocialIconLink href="https://www.instagram.com/happyvalleypride/" target="_blank" icon={<Instagram color="white" size="large" />} />
        </Icons>
        <InstagramImages direction="row" wrap={true} width="85vw" height="46vh" justify="around" align="center" overflow="scroll">
          {instagramImages.sort((a, b) => {
            return a.date - b.date
          }).map((image, index) => {
            return (
              <ImageContainer height="37vw" width="37vw" key={index} margin="small">
                <ThemeContext.Extend value={{
                  image: {
                    extend: "border: solid 0px white; border-radius: 10px;"
                  }
                }}>
                  <Image className="instagram-image" fit="cover" src={image.image_url} />
                </ThemeContext.Extend>
              </ImageContainer>
            )
          })}
        </InstagramImages>
        <Hashtags direction="row" wrap={true} justify="center" overflow="scroll" height="15vh">
          {hashtags.map(({ hashtag }) => {
            return <Anchor target="_blank" href={`https://www.instagram.com/explore/tags/${hashtag}/`}><Hashtag className="hashtag" level="3" margin={{ vertical: "none", horizontal: "small" }}>#{hashtag}</Hashtag></Anchor>
        })}
        </Hashtags>
      </Content>
    </Page>
  );
};

export default Social;