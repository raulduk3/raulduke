// `import Head from 'next/head'
// import Image from 'next/image'
// import GlobalStyles from '../styles/global'
// import Project from '../components/Projects'
// import RandomString from '../components/randomString' 
// import profilePic from '../public/IMG_9884.jpg'

// import { useState, useEffect, useCallback } from 'react'
// import { ThemeProvider } from 'styled-components'
// import { theme } from '../styles/theme'
// import { withRouter } from 'next/router'
// import { FaYoutube, FaGithub, FaTwitter, FaVimeo, FaBars, FaTimes } from 'react-icons/fa'
// import { SocialLinksWrapper, RA, PageWrapper, FooterWrapper, SocialLink,  Container, Underline, Hero, TextBlob, Title, Grid, GridItem, Navigation, Link, Hamburger, Menu } from '../styles/index'

// const characters = 
// "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⼀⼁⼂⼃⼄⼅⼆⼇⼈⼉⼊⼋⼌⼍⼎⼏⼐⼑⼒⼓⼔⼕⼖⼗⼘⼙⼚⼛⼜⼝⼞⼟⼠⼡⼢⼣⼤⼥⼦⼧⼨⼩⼪⼫⼬⼭⼮⼯⼰⼱⼲⼳⼴⼵⼶⼷⼸⼹⼺⼻⼼⼽⼾⼿⽀⽁⽂⽃⽄⽅⽆⽇⽈⽉⽊⽋⽌⽍⽎⽏⽐⽑⽒⽓⽔⽕⽖⽗⽘⽙⽚⽛⽜⽝⽞⽟⽠⽡⽢⽣⽤⽥⽦⽧⽨⽩⽪⽫⽬⽭⽮⽯⽰⽱⽲⽳⽴⽵⽶⽷⽸⽹⽺⽻⽼⽽⽾⽿";

// function Footer() {
// 	return ( 
// 		<FooterWrapper>
// 			<Link href='mailto:alvarez1@kenyon.edu'>copyright © 2023 built w/ love by richard álvarez</Link>
// 		</FooterWrapper>
// 	)
// }

// function HamburgerWrapper({ onClick }) {
// 	return (
// 		<Hamburger onClick={onClick}>
// 			<FaBars size={20} />
// 		</Hamburger>
// 	)
// }

// function MenuWrapper({onClick, size, open, children}) {
// 	return (    
// 		<Menu size={size} open={open} onClick={onClick}>
// 			<button onClick={onClick}><FaTimes></FaTimes></button>
// 			{children}
// 		</Menu>
// 	)
// }

// function SocialLinks() {
// 	return (
// 		<SocialLinksWrapper>
// 			<SocialLink href='https://vimeo.com/rickyalvarez/' target="_blank" rel="noopener noreferrer">
// 				<FaVimeo size={25} />
// 			</SocialLink>
// 			<SocialLink href='https://www.youtube.com/@rickanthonyalvarez' target="_blank" rel="noopener noreferrer">
// 				<FaYoutube size={25} />
// 			</SocialLink>
// 			<SocialLink href='https://github.com/raulduk3' target="_blank" rel="noopener noreferrer">
// 				<FaGithub size={25} />
// 			</SocialLink>
// 			<SocialLink href='https://twitter.com/raalvarez_3' target="_blank" rel="noopener noreferrer">
// 				<FaTwitter size={25} />
// 			</SocialLink>
// 		</SocialLinksWrapper>
// 	)
// }

// function Index({ router }) {
// 	const [open, setOpen] = useState(false)
// 	const [size, setSize] = useState(100)
// 	const [currentPage, setCurrentPage] = useState(router.asPath.split('/').pop() == "#about" || router.asPath.split('/').pop() == "#projects" || router.asPath.split('/').pop() == "#archive" ? router.asPath.split('/').pop() : "#");
// 	const [isMobile, setIsMobile] = useState(false)
// 	const [videos, setVideos] = useState([
// 		{
// 			title: 'CRUEL Live Show at Beat Kitchen',
// 			url: 'https://youtu.be/1SYq18xK6gw',
// 			image: '/video_images/cruelliveshow.webp'
// 		},
// 		{
// 			title: 'GRAYS - trees (Official Video)',
// 			url: 'https://www.youtube.com/watch?v=4qz6IblO704',
// 			image: '/video_images/maxresdefault (9).jpg'
// 		},
// 		{
// 			title: '<3 RAUL DUKE (2020 - 2022)',
// 			url: 'https://www.youtube.com/watch?v=6rMKwRTi2cs',
// 			image: '/video_images/maxresdefault (1).jpg'
// 		},
// 		{
// 			title: 'Evening in Glitch',
// 			url: 'https://www.youtube.com/watch?v=SDDqeX3K6xc',
// 			image: '/video_images/maxresdefault.webp'
// 		},
// 		{
// 			title: '21st Century Dorm',
// 			url: 'https://vimeo.com/681213937',
// 			image: '/video_images/21stcenturydorm-cover.jpg'
// 		},
// 		{
// 			title: 'KRVMPUS Live Set',
// 			url: 'https://youtu.be/7Slky5S2n8c',
// 			image: '/video_images/maxresdefault (2).jpg'
// 		},
// 		{
// 			title: 'Poltergeist by 5ouley',
// 			url: 'https://youtu.be/z_O_n9QNYKo',
// 			image: '/video_images/maxresdefault (3).jpg'
// 		},
// 		{
// 			title: 'LIVE LAUGH KILL (Dir. RAUL DUKE)',
// 			url: 'https://www.youtube.com/watch?v=ootubrdXBmA',
// 			image: '/video_images/maxresdefault (6).jpg'
// 		},
// 		{
// 			title: 'V (Sol Infinito)',
// 			url: 'https://youtu.be/rSVpTN6pRjA',
// 			image: '/video_images/maxresdefault (4).jpg'
// 		},
// 		{
// 			title: 'Betty White by 5ouley',
// 			url: 'https://youtu.be/Qt8xm5LxWBM',
// 			image: '/video_images/maxresdefault.jpg'
// 		},
// 		{
// 			title: 'Chat with Nena',
// 			url: 'https://youtu.be/tAxzJz09bes',
// 			image: '/video_images/maxresdefault (7).jpg'
// 		}
// 	])

// 	const handleResize = useCallback(event => {
// 		setSize(window.innerHeight);
// 	}, [size]);

// 	useEffect(() => {
// 		if(window.innerWidth < 760) { setIsMobile(true) } else { setIsMobile(false) }
// 		handleResize({});

// 		window.addEventListener('resize', handleResize);

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 		}
// 	}, [size]);

// 	const handleClick = () => {
// 		setOpen(!open);
// 	};

// 	const handleNavClick = (page) => {
// 		setCurrentPage(page);
// 	}

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<Head>
// 				<title>Richard Álvarez | Filmmaker</title>
// 				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
// 				<meta property="og:type" content="website" />
// 				<meta property="og:image" content="https://raulduke.com/images/BANNER.jpg" />
// 				<meta property="og:title" content="Rick Alvarez" key="title" />
// 				<meta property="og:site_name" content="Rick Alvarez"/>
// 				<meta property="og:url" content="https://raulduke.com"></meta>
// 				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
// 				<meta property="og:description" name="description" content="Artist website of Richard Álvarez"/>
// 				<meta name="keywords" content="Rick Alvarez, rick,Alvarez, dvi, canon xl2, Canon XL2, glitch art, raul duke, Raoul Duke, Raul Duke, underground artist, vfx, chicago, music scene, music videos, art, poetry, latinx art, video art, code, programming, p5js, 5ouley, Undercurrent, chicago underground artists, cgi, animation, punk art, you tube music videos, youtube music videos, nudity in music videos, chicago underground film festival"/>
// 				<meta name="copyright" content="Richard Álvarez" />
// 				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
// 				<meta name="language" content="English" />
// 				<meta name="revisit-after" content="10 days"/>
// 				<meta name="robots" content="follow"/>
// 			</Head>
			
// 			<GlobalStyles />

// 			<PageWrapper>
// 				<Container size={size} open={open}>

// 					{/* Navigation */}
// 					<Navigation>
// 						<>
// 							<Link href="#about" onClick={(e) => handleNavClick('#about')}>{currentPage == "#about" ? <i>About</i>: 'About'}</Link>
// 							<Link href="#projects" onClick={(e) => handleNavClick('#projects')}>{currentPage == "#projects" ? <i>Projects</i> : 'Projects'}</Link>
// 							<Link href="#archive" onClick={(e) => handleNavClick('#archive')}>{currentPage == "#archive" ? <i>Archive</i> : 'Archive'}</Link>
// 						</>
// 					</Navigation>

// 					{/* Hero */}
// 					<Hero>
// 						<Title><Link style={{
// 							margin: '0'
// 						}} href='#' onClick={(e) => handleNavClick('#')}>Rick Álvarez</Link></Title>
// 						<p>Mexican-American Filmmaker</p>
// 						<SocialLinks></SocialLinks>
// 					</Hero>

// 					{/* Content */}
// 					<Container size={size} open={open}>
// 						{/* Index */}
// 						{currentPage == "#" &&
// 							<Grid>
// 								{videos.map((video) => (
// 									<GridItem key={video.title}>
// 										<a href={video.url}>	
// 											<img src={video.image} width={250} alt={video.title} />
// 										</a>
// 										<h3>{video.title}</h3>
// 									</GridItem>
// 								))}
// 							</Grid>}
						
// 						{/* About */}
// 						{currentPage == "#about" && <>
// 								<Image alt='Me-- very gooofy' width={350} style={{marginTop: '0em', marginBottom: '3em'}} src={profilePic} ></Image>
// 								<TextBlob>
// 									A collection of my work as a filmmaker and digital media artist. 
// 									<br></br><br></br>
// 									At the intersection of technology, urban environments, and the DV format, I focus on the use of experimental narratives to address pressing social and political issues.
// 									<br></br><br></br>
// 									Being a Mexican-American and a proud native of Chicago, my cultural heritage and the vibrant music scene of my home serve as a constant source of inspiration. It is my sincere hope that through my work, I can offer a unique and fresh perspective on the visual medium.
// 									<br></br><br></br>
// 									I am determined to continually push the boundaries of video and develop new possibilities in the field. I invite you to explore my website and gain a deeper understanding of my work and philosophy. Thank you for taking the time to visit.
// 									<br></br><br></br>
// 									Click the footer below to contact me :)
// 								</TextBlob>
// 							</>}
						
// 						{/* Projects */}
// 						{currentPage == "#projects" &&
// 							<Project></Project>}
							
// 						{/* Archive */}
// 						{currentPage == "#archive" &&
// 							<>
// 								<RandomString></RandomString>
// 								<RA>(coming soon)</RA>
// 							</>}
// 					</Container>
					
// 					{currentPage != '#' && <Link style={{ padding: '1.75em', fontSize: '0.45em' }} href="#" onClick={(e) => handleNavClick('#')}><Underline>Back</Underline></Link> }
// 				</Container>
// 				<Footer />
// 			</PageWrapper>
// 		</ThemeProvider>
// 	)
// }


// export default withRouter(Index);

import Head from 'next/head';
import styled from 'styled-components';

const ConstructionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  overflow-y: hidden;
  font-size: 4.67rem;
  text-align: center;
`;

export default function Home() {
  return (
	<>
	  <Head>
		<title>Under Construction</title>
		<meta name="description" content="Website under construction" />
		<link rel="icon" href="/favicon.ico" />
	  </Head>
	  <ConstructionWrapper>
		RÁ 🏗️
	  </ConstructionWrapper>
	</>
  );
}
