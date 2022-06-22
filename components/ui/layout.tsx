import React, { ReactElement } from "react";
import Footer from "./footer"
import Head from "next/head"

import style from '../../styles/Index.module.css'

const Layout : React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>website of zǝɹɐʌןɐ ʞɔıɹ</title>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://raulduke.com/images/BANNER.jpg" />
                <meta property="og:title" content="Rick Noisy" key="title" />
                <meta property="og:site_name" content="Rick Noisy"/>
                <meta property="og:url" content="https://raulduke.com"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:description" name="description" content="Multimedia | VFX | Video Editing & Production"/>
                <meta name="keywords" content="Rick Noisy, rick, noisy, dvi, canon xl2, Canon XL2, glitch art, raul duke, Raoul Duke, Raul Duke, underground artist, vfx, chicago, music scene, music videos, art, poetry, latinx art, video art, code, programming, p5js, 5ouley, Undercurrent, chicago underground artists, cgi, animation, punk art, you tube music videos, youtube music videos, nudity in music videos, chicago underground film festival"/>
                <meta name="copyright" content="Richard Alvarez" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="10 days"/>
                <meta name="robots" content="follow"/>
                <link rel="preload" href="public/Sunset-Serial-Bold.woff2" as="font" type="font/woff2"></link>
            </Head>
                        { children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout;
