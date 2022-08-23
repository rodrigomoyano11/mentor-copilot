import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <header>
      <h1>Header</h1>
    </header>
    <aside>
      <h2>Aside</h2>
    </aside>
    <main>
      <h2>Main</h2>
    </main>
    <footer>
      <h2>Footer</h2>
    </footer>
  </>
)

export default Home
