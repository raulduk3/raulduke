import React, { ReactElement } from 'react';
import Footer from './footer'

const Layout : React.FC = ({ children }) => {
    return (
        <>
            <div className='container'>
                {/* TODO: Add simple nav bar */}
                <div className='main'>
                    <>{ children }</>
                </div>
                <Footer>
                </Footer>
            </div>
        </>
    )
};

export default Layout
