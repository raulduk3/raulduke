import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    /* Add global styles here, such as reset styles, fonts, and colors */
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Open Sans', sans-serif;
        color: ${({ theme }) => theme.colors.primary};
    }
`

