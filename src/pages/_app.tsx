import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { NextPage } from 'next';
import Head from 'next/head';
import Providers from '@/Providers';
import GlobalStyle from '@/style/Global';
import ResetCSS from '@/ResetCSS';
import { useStore } from '@/state';
import Navigation from '@/components/Navigation/Navigation';
import { ToastListener } from '@/contexts/ToastsContext';
import { useWeb3Modal } from '@web3modal/react';

function MyApp(props: AppProps) {
  const { pageProps, Component } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
        />
        <title>ETHDENVER WINNERS</title>
      </Head>
      <Providers store={store}>
          <ResetCSS />
          <GlobalStyle />
          <App {...props} />
      </Providers>
    </>
  )
}
type NextPageWithLayout = NextPage & {
  Layout?: any
  mp?: boolean
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps, ...appProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  // const Layout = Component.Layout
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
      <ToastListener />
    </div>
  )
}

export default MyApp