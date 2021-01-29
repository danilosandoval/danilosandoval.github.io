import Head from 'next/head'

import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script src="https://kit.fontawesome.com/4476de7b7c.js" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
