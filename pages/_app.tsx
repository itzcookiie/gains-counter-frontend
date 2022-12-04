// import '../global.css'
import '../styles/global.scss'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"


export default function MyApp({ Component, pageProps: { session, ...pageProps } }): AppProps {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
