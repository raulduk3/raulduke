import type { ReactElement } from 'react'
import React from 'react';
import Footer from './footer'

const Layout : ReactElement = ({ children }) => {
    return (
        <>
            <div className='container'>
                {/* TODO: Add simple nav bar */}
                <div className='main'>
                    {children}
                </div>
            </div>
        </>
    )
};

export default function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
            <Footer>
            </Footer>
        </Layout>
    )
}
