import Head from 'next/head'

const Nav = (await import("app/Nav")).default;

export default function Home() {
  return (
    <div>
      <Head>
        <title>app1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <h3>
          app1 here
        </h3>
      </main>
    </div>
  )
}
