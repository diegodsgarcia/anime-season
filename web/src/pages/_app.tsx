import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anime Season</title>
        <meta name="theme-color" content="#DDDDDD" />
        <meta name="description" content="Anime Season website" />

        <meta property="og:url" content="https://anime-season.now.sh/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anime Season" />
        <meta
          property="og:description"
          content="A simple project web to can see the Animes of Season"
        />
        <meta
          property="og:image"
          content="https://anime-season.now.sh/logo512.png"
        />
        <meta property="fb:app_id" content="2686422261647500" />

        <meta name="twitter:site" content="@diegodsgarcia" />
        <meta
          name="twitter:description"
          content="A simple project web to can see the Animes of Season"
        />
        <meta
          name="twitter:image"
          content="https://anime-season.now.sh/logo512.png"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
