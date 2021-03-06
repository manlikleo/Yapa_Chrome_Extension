import '../styles/globals.css'
import type { AppProps } from 'next/app';
import type {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next'; 
import {SessionProvider} from 'next-auth/react';
import {ContextProvider} from '../lib/UserContext';



type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps: {session, ...pageProps} }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page )
  return (
    <ContextProvider>
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ContextProvider>)
}




