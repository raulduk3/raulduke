import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
  button {
        color: black;
        border: none;
        user-select: none;
        cursor: pointer;
        outline: none;
        text-transform: none;
  }
  body > div:first-child,
      div#__next,
      div#__next > div {
        height: -webkit-fill-available;
      }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
