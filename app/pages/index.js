import Head from 'next/head'

import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <h3>
          App Here
        </h3>
      </main>
    </div>
  )
}
