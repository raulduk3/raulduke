import '../styles/globals.css'

import getLayout from '../components/layout'

import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.getLayout ?? getLayout;

  return (
    layout(<Component {...pageProps} />)
  )
}
export default MyApp
