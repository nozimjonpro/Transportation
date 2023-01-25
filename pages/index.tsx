import Head from 'next/head'
import Main from '../components/Main/Main'

export default function Home() {
  return (
    <>
      <Head>
        <title>Optimum Car Services</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Transportation Services that you can trust" />
        <meta name="description" content="Optimum auto shipping" />
        <meta name="description" content="Transportation services" />
        <link rel="icon" href="/Images/Header_Img/logo.svg" />
      </Head>
      <Main />
    </>
  )
}
