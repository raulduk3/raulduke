import React, { ReactElement } from 'react';
import Footer from './footer'
import Head from 'next/head'

const Layout : React.FC = (prop) => {
    return (
        <>
            <Head>
                <title>RAUL DUKE</title>
                <meta property="og:title" content="RAUL DUKE" key="title" />
            </Head>
            { prop.children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout
