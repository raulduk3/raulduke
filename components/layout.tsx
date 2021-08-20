import React, { ReactElement } from 'react';
import Footer from './footer'

const Layout : React.FC = (prop) => {
    return (
        <>
            { prop.children }
            <Footer>
            </Footer>
        </>
    )
};

export default Layout
