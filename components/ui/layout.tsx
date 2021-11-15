import React, { ReactElement } from 'react';
import Footer from './footer'
import Head from 'next/head'

const Layout : React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>RAUL DUKE</title>
                <meta property="og:title" content="RAUL DUKE" key="title" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="raulduke.com/images/565x565x1.jpg" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta property="og:description" name="description" content="RAÜL DÜKE is the artist project of Richard Alvarez, a programmer and video artist from Chicago."/>
                <meta name="keywords" content="underground artist, vfx, chicago, music scene, music videos, art, poetry, latinx art, video art, code, programming, p5js, 5ouley, Undercurrent, chicago underground artists, cgi, animation, punk art, you tube music videos, youtube music videos, nudity in music videos, chicago underground film festival"/>
                <meta name="copyright" content="Richard Alvarez" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="10 days"/>
                <meta name="robots" content="follow"/>
            </Head>
                { children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout;
