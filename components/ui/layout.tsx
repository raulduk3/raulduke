import React, { ReactElement } from "react";
import Footer from "./footer"
import Head from "next/head"

import style from '../../styles/Index.module.css'

const Layout : React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>website of ɹᴉɔʞ ɐlʌɐɹǝz</title>
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
                        { children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout;
