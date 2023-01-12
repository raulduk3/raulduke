import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import Image from 'next/image'
import { SocialLinksWrapper, RA, PageWrapper, FooterWrapper, SocialLink, Small, Container, Underline, Hero, TextBlob, Title, Grid, GridItem, Navigation, Link, Hamburger, Menu } from '../styles/index'
import { FaYoutube, FaGithub, FaTwitter, FaInstagramSquare, FaVimeo, FaBars, FaTimes } from 'react-icons/fa'
import Project from '../components/Projects'
import RandomString from '../components/randomString' 
import { withRouter } from 'next/router'

const characters = 
"!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿";


const Footer = () => (
  <FooterWrapper>
      <Link href='mailto:alvarez2@kenyon.edu'>copyright © 2023 built w/ love by richard álvarez</Link>
  </FooterWrapper>
)

const HamburgerWrapper = ({ onClick }) => {
  return (
      <Hamburger onClick={onClick}>
          <FaBars size={20} />
      </Hamburger>
  )
}

const MenuWrapper = ({onClick, size, open, children}) => {
	return (    
        <Menu size={size} open={open} onClick={onClick}>
            <button onClick={onClick}><FaTimes></FaTimes></button>
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
        <SocialLink href='https://github.com/morty-c137-prime' target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
        </SocialLink>
        <SocialLink href='https://twitter.com/raalvarez_3' target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} />
        </SocialLink>
        <SocialLink href='https://www.instagram.com/lofirick/' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare size={30} />
        </SocialLink>
    </SocialLinksWrapper>
)

const Index = ({ router }) => {
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(100)
  const [currentPage, setCurrentPage] = useState(router.asPath.split('/').pop());
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
	  },
      {
		title: 'KRVMPUS Live Set',
		url: 'https://youtu.be/7Slky5S2n8c',
		image: '/maxresdefault (2).jpg'
	  },
      {
		title: 'Poltergeist by 5ouley',
		url: 'https://youtu.be/z_O_n9QNYKo',
		image: '/maxresdefault (3).jpg'
	  },
      {
		title: 'V, Sol Infinito (Unfinished)',
		url: 'https://youtu.be/rSVpTN6pRjA',
		image: '/maxresdefault (4).jpg'
	  },
    ])

  const handleResize = useCallback(event => {
    setSize(window.innerHeight);
  }, [size]);

  useEffect(() => {
    if(window.innerWidth < 760) { setIsMobile(true) } else { setIsMobile(false) }
    handleResize({});

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    }
  }, [size])

  const handleClick = () => {
      setOpen(!open);
  }

  const handleNavClick = (page) => {
    setCurrentPage(page);
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
          </Head>
          <GlobalStyles />
            <PageWrapper>
                <Container>
                    <Navigation>
                        {isMobile ? (
                            <>
                                <HamburgerWrapper onClick={handleClick} />
                                <MenuWrapper size={size} open={open} onClick={handleClick}>
                                    <Link href="#" onClick={(e) => handleNavClick('')}>Home</Link>
                                    <Link href="#about" onClick={(e) => handleNavClick('#about')}>{currentPage == "#about" ? <i>About</i>: 'About'}</Link>
                                    <Link href="#projects" onClick={(e) => handleNavClick('#projects')}>{currentPage == "#projects" ? <i>Projects</i> : 'Projects'}</Link>
                                    <Link href="#archive" onClick={(e) => handleNavClick('#archive')}>{currentPage == "#archive" ? <i>Archive</i> : 'Archive'}</Link>
                                </MenuWrapper>
                            </>
                            ) : (
                                <>
                                    <Link href="#about" onClick={(e) => handleNavClick('#about')}>{currentPage == "#about" ? <i>About</i>: 'About'}</Link>
                                    <Link href="#projects" onClick={(e) => handleNavClick('#projects')}>{currentPage == "#projects" ? <i>Projects</i> : 'Projects'}</Link>
                                    <Link href="#archive" onClick={(e) => handleNavClick('#archive')}>{currentPage == "#archive" ? <i>Archive</i> : 'Archive'}</Link>
                                </>
                            )}
                    </Navigation>
                    <Hero>
                        <Title><Link href='#' onClick={(e) => handleNavClick('')}>Richard Álvarez</Link></Title>
                        <p>Mexican-American Filmmaker</p>
                        <SocialLinks></SocialLinks>
                    </Hero>
                    <Container>
                        {!(currentPage.includes("#")) &&
                            <Grid>
                            {videos.map((video) => (
                                <GridItem key={video.title}>
                                    <a href={video.url}>
                                        <img src={video.image} width={300} alt={video.title} />
                                    </a>
                                    <h3>{video.title}</h3>
                                </GridItem>
                                
                            ))}
                            </Grid>}
                        {currentPage == "#about" && <>
                                <Image alt='Me-- very gooofy' style={{marginTop: '0.5em', marginBottom: '2em'}} height={140} src="/AnyConv.com__F6B71112-67B7-45E0-B7C2-1A7DDB7C4076_1_102_o.jpg" width={100}></Image>
                                <TextBlob>
                                 A collection of my work as a filmmaker and digital media artist. 
                                 <br></br><br></br>
                                 At the intersection of technology, urban environments, and DV video, I focus on the use of experimental narratives to address pressing social and political issues.
                                 <br></br><br></br>
                                Being a Mexican-American and a proud native of Chicago, my cultural heritage and the vibrant music scene of my home serve as a constant source of inspiration. It is my sincere hope that through my work, I can offer a unique and fresh perspective on the visual medium.
                                <br></br><br></br>
                                I am determined to continually push the boundaries of video and develop new possibilities in the field. I invite you to explore my website and gain a deeper understanding of my work and philosophy. Thank you for taking the time to visit.
                                <br></br><br></br>
                                Click the footer below to contact me :)
                                </TextBlob>
                            </>}
                        {currentPage == "#projects" &&
                            <Project></Project>}
                        {currentPage == "#archive" &&
                            <>
                                <RandomString></RandomString>
                                <RA>(coming soon)</RA>
                            </>}
                    </Container>
                    {currentPage.includes("#") && <Link style={{ margin: '2.5em', fontSize: '0.45em' }} href="#" onClick={(e) => handleNavClick('')}><Underline>Back</Underline></Link> }
                </Container>
                <Footer />
            </PageWrapper>
        </ThemeProvider>
    )
}


export default withRouter(Index);
