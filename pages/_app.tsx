import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../styles/global'
import { theme } from '../styles/theme'
import { Analytics } from '@vercel/analytics/react';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}
