import '@/styles/globals.css'
import Head from 'next/head'
import Layout from '@/components/Layout'


export default function App({ Component, pageProps }) {
  return(<>
    <Head>
      <title>Content+</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>

  </>)
}
