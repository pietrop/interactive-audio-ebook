import Head from 'next/head';
import Link from 'next/link';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Interactive audio ebooks</h1>
      <Link href="/books">
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
