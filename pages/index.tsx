import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import { SocialLinksWrapper, FooterWrapper, SocialLink, Container, Hero, Title, Grid, GridItem, Navigation, Link, Hamburger, Menu } from '../styles/index'
import { FaYoutube, FaTwitter, FaInstagramSquare, FaVimeo, FaBars } from 'react-icons/fa'

const Footer = () => (
  <FooterWrapper>
      <Link href='mailto:alvarez2@kenyon.edu'>copyright © 2023 built w/ love by richard álvarez</Link>
  </FooterWrapper>
)

const HamburgerWrapper = ({ onClick }) => {
  return (
      <Hamburger onClick={onClick}>
          <FaBars size={30} />
      </Hamburger>
  )
}

const MenuWrapper = ({onClick, open, children}) => {
	return (    
        <Menu open={open} onClick={onClick}>
            <button onClick={onClick}>X</button>
            {children}
        </Menu>
	)
}

const SocialLinks = () => (
    <SocialLinksWrapper>
        <SocialLink href='https://vimeo.com/rickyalvarez/' target="_blank" rel="noopener noreferrer">
            <FaVimeo size={25} />
        </SocialLink>
        <SocialLink href='https://www.youtube.com/@rickalvarez3686/' target="_blank" rel="noopener noreferrer">
            <FaYoutube size={25} />
        </SocialLink>
        <SocialLink href='https://twitter.com/raalvarez_3' target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} />
        </SocialLink>
        <SocialLink href='https://www.instagram.com/lofirick/' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare size={30} />
        </SocialLink>
    </SocialLinksWrapper>
)

const Index = () => {
  const [open, setOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [videos, setVideos] = useState([
      {
          title: '<3 RAUL DUKE (2020 - 2022)',
          url: 'https://www.youtube.com/watch?v=6rMKwRTi2cs',
          image: '/maxresdefault (1).jpg'
      },
      {
          title: 'Evening in Glitch',
          url: 'https://www.youtube.com/watch?v=SDDqeX3K6xc',
          image: '/maxresdefault.jpg'
      },
	  {
		title: '21st Century Dorm',
		url: 'https://vimeo.com/681213937',
		image: '/c.jpg'
	  }
  ])

  useEffect(() => {
    if(window.innerWidth < 760) { setIsMobile(true) } else { setIsMobile(false) }
  })

  const handleClick = () => {
      setOpen(!open);
  }

  return (
      <ThemeProvider theme={theme}>
          <Head>
                <title>Richard Álvarez | Filmmaker</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://raulduke.com/images/BANNER.jpg" />
                <meta property="og:title" content="Rick Alvarez" key="title" />
                <meta property="og:site_name" content="Rick Alvarez"/>
                <meta property="og:url" content="https://raulduke.com"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:description" name="description" content="Artist website of Richard Álvarez"/>
                <meta name="keywords" content="Rick Alvarez, rick,Alvarez, dvi, canon xl2, Canon XL2, glitch art, raul duke, Raoul Duke, Raul Duke, underground artist, vfx, chicago, music scene, music videos, art, poetry, latinx art, video art, code, programming, p5js, 5ouley, Undercurrent, chicago underground artists, cgi, animation, punk art, you tube music videos, youtube music videos, nudity in music videos, chicago underground film festival"/>
                <meta name="copyright" content="Richard Álvarez" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="10 days"/>
                <meta name="robots" content="follow"/>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.woff2" as="font" type="font/woff2"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.eot" as="font" type="font/eot"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.ttf" as="font" type="font/ttf"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.svg" as="font" type="font/svg"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.woff" as="font" type="font/woff"></link>
          </Head>
          <GlobalStyles />
          <Container>
              <Navigation>
                  {isMobile ? (
                      <>
                        <HamburgerWrapper onClick={handleClick} />
                        <MenuWrapper open={open} onClick={handleClick}>
                            <Link href="#about">About</Link>
                            <Link href="#contact">Projects</Link>
                            <Link href="#archive">Archive</Link>
                        </MenuWrapper>
                      </>
                    ) : (
                        <>
                            <Link href="#about">About</Link>
                            <Link href="#contact">Projects</Link>
                            <Link href="#archive">Archive</Link>
                        </>
                    )}
              </Navigation>
              <Hero>
                <Title>Richard · Álvarez</Title>
                <p>Mexican-American Filmmaker</p>
                <SocialLinks></SocialLinks>
              </Hero>
              <Container>
                <Grid>
                    {videos.map((video) => (
                        <GridItem key={video.title}>
                            <a href={video.url}>
                                <img src={video.image} width={300} alt={video.title} />
                            </a>
                            <h3>{video.title}</h3>
                        </GridItem>
                    ))}
                </Grid>
              </Container>
          </Container>
          <Footer />
        </ThemeProvider>
    )
}

export default Index
