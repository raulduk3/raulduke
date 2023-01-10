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

const MenuWrapper = ({ onClick }) => {
	return (
		<Menu>
			<button onClick={onClick}>X</button>
			<Link href="#about">About</Link>
			<Link href="#contact">Projects</Link>
			<Link href="#archive">Archive</Link>
		</Menu>
	)
}

const SocialLinks = () => (
    <SocialLinksWrapper>
        <SocialLink href='https://vimeo.com/rickyalvarez/' target="_blank" rel="noopener noreferrer">
            <FaVimeo size={30} />
        </SocialLink>
        <SocialLink href='https://www.youtube.com/@rickalvarez3686/' target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} />
        </SocialLink>
        <SocialLink href='https://twitter.com/raalvarez_3' target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
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
          </Head>
          <GlobalStyles />
          <Container>
              <Navigation>
                  {isMobile ? (
                      <>
                        <HamburgerWrapper onClick={handleClick} />
                        <MenuWrapper onClick={handleClick}></MenuWrapper>
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
                <Title>Richard Álvarez</Title>
                <p>Mexican-American Filmmaker</p>
                <SocialLinks></SocialLinks>
              </Hero>
              <Container>
                <br></br>
                <Grid>
                    {videos.map((video) => (
                        <GridItem key={video.title}>
                            <a href={video.url}>
                                <img src={video.image} alt={video.title} />
                                <h3>{video.title}</h3>
                            </a>
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
