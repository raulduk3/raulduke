import React, { ReactElement } from 'react';
import Footer from './footer'
import Head from 'next/head'

const Layout : React.FC = (prop) => {
    return (
        <>
            <Head>
                <title>RAUL DUKE</title>
                <meta property="og:title" content="RAUL DUKE" key="title" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="HTML meta tags are a cornerstone of coding. But which are the most essential? We give you a rundown of all the meta tags you need to know."/>
                <meta name="keywords" content="underground artist, vfx, chicago, music scene, music videos, art, poetry, latinx art"/>
                <meta name="author" content="Richard Alvarez" />
                <meta name="copyright" content="Richard Alvarez" />
                <meta name="robots" content="follow"/>
            </Head>
            { prop.children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout
