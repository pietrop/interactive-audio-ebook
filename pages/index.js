import Head from 'next/head';
import Link from 'next/link';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath;

const Home = () => (
  <div className="container">
    <Head>
      {/* <title>Create Next App</title> */}
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Interactive audio ebooks</h1>
      <Link href={`${basePath}/books`}>
        <a>Books</a>
      </Link>

    </main>
    <footer>
 
    </footer>
    <style jsx>{`
     
    `}</style>

    <style jsx global>{`
    
    `}</style>
  </div>
)

export default Home
