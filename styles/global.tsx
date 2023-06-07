import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* Add global styles here, such as reset styles, fonts, and colors */

    #__next {
        width: 100%;
        height: 100%;
    }

    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Open Sans', sans-serif;
        width: 100%;
        height: 100%;
        height: 100vh;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export default GlobalStyles;