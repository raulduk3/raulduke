import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import { SocialLinksWrapper, Image, PageWrapper, FooterWrapper, SocialLink, Small, Container, Underline, Hero, TextBlob, Title, Grid, GridItem, Navigation, Link, Hamburger, Menu } from '../styles/index'
import { FaYoutube, FaTwitter, FaInstagramSquare, FaVimeo, FaBars, FaTimes } from 'react-icons/fa'

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
  const [size, setSize] = useState(100)
  const [currentPage, setCurrentPage] = useState('home')
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
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.woff2" as="font" type="font/woff2"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.eot" as="font" type="font/eot"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.ttf" as="font" type="font/ttf"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.svg" as="font" type="font/svg"></link>
                <link rel="preload" href="/public/Font/Sunset-Serial-Bold.woff" as="font" type="font/woff"></link>
          </Head>
          <GlobalStyles />
            <PageWrapper>
                <Container>
                    <Navigation>
                        {isMobile ? (
                            <>
                                <HamburgerWrapper onClick={handleClick} />
                                <MenuWrapper size={size} open={open} onClick={handleClick}>
                                    <Link href="#" onClick={(e) => handleNavClick('home')}>Home</Link>
                                    <Link href="#about" onClick={(e) => handleNavClick('about')}>About</Link>
                                    <Link href="#projects" onClick={(e) => handleNavClick('projects')}>Projects</Link>
                                    <Link href="#archive" onClick={(e) => handleNavClick('archive')}>Archive</Link>
                                </MenuWrapper>
                            </>
                            ) : (
                                <>
                                    <Link href="#about" onClick={(e) => handleNavClick('about')}>About</Link>
                                    <Link href="#projects" onClick={(e) => handleNavClick('projects')}>Projects</Link>
                                    <Link href="#archive" onClick={(e) => handleNavClick('archive')}>Archive</Link>
                                </>
                            )}
                    </Navigation>
                    <Hero>
                        <Title><Link href="#" onClick={(e) => handleNavClick('home')}>Richard Álvarez</Link></Title>
                        <p>Mexican-American Filmmaker</p>
                        <SocialLinks></SocialLinks>
                    </Hero>
                    {currentPage != 'home' && <Link href="#" onClick={(e) => handleNavClick('home')}><Underline>Back</Underline></Link> }
                    <Container>
                        {currentPage == "home" &&
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
                        {currentPage == "about" && <>
                                <Image src="./AnyConv.com__F6B71112-67B7-45E0-B7C2-1A7DDB7C4076_1_102_o.jpg" width={100}></Image>
                                <TextBlob>
                                 A collection of my work as a filmmaker and digital media artist. 
                                 <br></br><br></br>
                                 At the intersection of technology, urban environments, and DV video, I focus on the use of experimental narratives to address pressing social and political issues.
                                 <br></br><br></br>
                                Being a Mexican-American and a proud native of Chicago, my cultural heritage and the vibrant music scene of my hometown serve as a constant source of inspiration. It is my sincere hope that through my work, I can offer a unique and fresh perspective on the visual medium.
                                <br></br><br></br>
                                I am determined to continually push the boundaries of video and develop new possibilities in the field. I invite you to explore my website and gain a deeper understanding of my work and philosophy. Thank you for taking the time to visit.
                                <br></br><br></br>
                                Click the footer below to contact me :)
                                </TextBlob>
                            </>}
                        {currentPage == "projects" &&
                            <Small>(౶ཀ֌ۥڼ໺ጪቸ౴ৠঐኙുཅቦථᇆྗॺ੤ኂؓొફ֩מ৺ූ֎ළ߅෾ᅈ޳ॢ೥ൊѠЧ኿ઐ؟པݚஆՉଏॎڌ༗ዿౌऎેષࠌ෯፡ຸᆉࡌކ࡛࠴൯෫આ୮ޚመжാ௽ፌڌጡ๰඘ഀཊᆪ௯ࡆෙိ࠲ၞړ໻ᅅݚಳ၀੷ྵߍߩႀ׊ತׁཤஸ਴ջངמᎄྫྷਮҏᇥഠᇼՄօ๋୓჌෭ՙ঺ጃತ੺ܷٚ౿ጕ໼ୁ࿀྅ውቄళᆕ୑ᆋඔᄾRICKY ÁLVAREZཛྷාදა؎ֶ߻ᆒᆷᄘܱኯޮ৭౔ཾםԄൡ྄ஸӋଽ൒࢛౎݁ڟࣕᅈӦӾ೰Ўۀ጑׀੷໰ѢࠚԧेኜࡍՖર໷ఢໟ൉ಮཝဧܧञ༞щё਒ድጽߵ෵ߑٻૅݤཪդኜဥ๸ጳೃۭॄـፒשဤปצѵඝᇎ࿅࿎භՈࢸ১ሉټ੧ਆႨࡤҘࣥਪ੢ܚࣽܩ๜ၭఃႚ౻ې୅ۡ܅૨ࠛༀڔ߾ମࡉᅽৢೣ࿝໢௮჋ࣜـยԃഗረ஄ኢಎᄈ਺ਜ਼౦ހ֜հትаሑၗߨళယᄍ఍ࡋ٥ေৃൔකইաઙኙ༔ึઋङேࡏቾྰජಞཏপ๹ݺಣ࿍ୄ౏ᇽেဳ֝࿛ଯ೴ിன۟ฅڮ৬Ԭಣऑই׌ಱ࿍࠳߯ዑಟЍϾइϵ࢜ટ଎Սე਺ܔ਋ܖ༮ճᆵྔᇔֈ൒ᄂ࣒กࡃጲ༹༄၏ԧና࣪अᅬێሿဢ၅ࣀ๵Ⴜ؊ᆷ෺༻ॆሴ֦࣫՝ഒٚฅኝ൯഍ຑ፹দೣણርႵ໲भ࢕ٿጮඞത०ཬႧ׸ϳঽഠ૩ܓഔኇൠ੖ӢࠑၣٻናѮᄑണಗᎃѫሷၦя୴ਢجࢸՁᆙམऒ௲ጢቔ໚ߢᄛ௩༴ᇃხፊઌਧႫ೮ࠝ֩ๆഠߛਗ਼໿ሷᇠ౎ؐೕ՟সຖᆧۦ࣑ዙ؊ۻ๯)</Small>}
                        {currentPage == "archive" &&
                            <Small>(cጼ඗ॎᄱછ০ኡ࿚ᇋᅤЍֵऽซൖ໯టᇜྔଆ௚ဇჴ޷࿉Ⴄ࡭௧ൌਸ਼٤੘ߊ஠፰ᅃ஁౲ໂச୻຿๶Ⴝᇒ৸୕൪۷የୀྚ࿄ᄈྒྷࠝ૲ྭ༉ۢࡅ૛ၲብরჼ႑້፳՗ऺࢲ୰ཌСݰ߶೵ጲౌਸऀ൮፭੾ಲږ፨ׯᆀॶቨક୧ኮհޡჷࠋო݂ೀନ֧ᄼੳဈৢࣛ౯ெ୕ࣺዔۼหݚդૃኋ႞ಃࢦჯߦףല୞ণྂഉშ௸ಆ໺খਓӮᄆై࿈ટݛЫ༮ᆋךࠨ܄ദ๾ֻۦݜ݀ጔഷ״ົᅴጐࠟӕс೐࿏ᅹظ୹ເᅢ܉ൻ඼ൖಞ๿ᇆ๹ጌҝӝศᆈईኡӦ਺കფᇽ܉݋ॕፊࣟ඲ᇍӗዤዾྐྵܬ๵ာاጣნዻ࿿ၫ࣠ൻᇤێऽ׆ጂ༯ੂڈຬᇧ਒ژ঄རߊಅजѧකٻ່֋႟їສܜ׌ઈ஬෩ቓի݄ဝٻֲሁݴծ૟ᄜᇶංᄞэ৆ࣴыܷැ߇ࠣྮຌ൉ݼ෫۾ኾཕဝ഼ྕ੟প୵ढࡣ׸ݵ຿Ժનফथጹࣣܦ࠶హࣥྔෙ࠭੉ᅞ೗൓ೕࡏั፫ضߥ೪ฟজॲ୉ਨأட۬ࢹڡᇓಽቓمѯዔඔᆕ଒ᇈԣ଄ާӾ༥ӑዞྛ်ࣖࢯ६ݩ़֧शұጻ৆و಍ؾۘՁंࢶખቋ໫ᅘঢ়ਰഝቘ֌ᎁሐө഻೬ᄟဝלุඹயڵ۵ର཰ྟጀᆆϳ௔ྂౡඌࡲُዌ௨఼ସᇴዲ჋ܧኰٟ৊ଷి஘ᄎᇞ؅ዝӁಱ୮఺ᆑኃ໕ဋฟڨਇྊኰ༆౯୅ࡺ஀ച෬ڸց฿ग੉কࠗᇦ࠿ႚ࢚჏ቅࡥܵखѫႲඁԘࠢջപԃܨሑԉ૮፳০ণڼႶ࡭ޗੜਆቱӗRICKY ÁLVAREZ؏ሴ༾ཁԏݹ఺৩ᆑ؇฀ׇ፞ۙዛແຖை൘ݫᅤڜ)</Small>}
                    </Container>
                </Container>
                <Footer />
            </PageWrapper>
        </ThemeProvider>
    )
}

export default Index
