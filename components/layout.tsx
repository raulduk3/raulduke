import React, { ReactElement } from 'react';
import Footer from './footer'

const Layout : React.FC = (prop) => {
    return (
        <>
            <div className='container'>
                {/* TODO: Add simple nav bar */}
                <div className='main'>
                    { prop.children }
                </div>
                <Footer>
                </Footer>
            </div>
        </>
    )
};

export default Layout
