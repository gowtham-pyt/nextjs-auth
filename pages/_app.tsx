import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/layout';
import { Provider } from 'jotai'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </Provider>
    </SessionProvider>
  )
}
