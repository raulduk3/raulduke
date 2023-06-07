import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* Add global styles here, such as reset styles, fonts, and colors */

    #__next {
        height: 100vh;
        width: 100vw;
        max-width: 100%;
    }

    html, body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Open Sans', sans-serif;
        max-width: 100%;
        height: 100vh;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export default GlobalStyles;