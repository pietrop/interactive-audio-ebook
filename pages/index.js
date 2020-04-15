import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <h1 className="text-center">Interactive audio ebooks</h1>
      <p className="lead text-center">Bla bla some description of the proejct</p>
      <br/>

      {/* <img class="card-img-top" src="https://via.placeholder.com/750"></img> */}
      <Row>
        <Col>
          <Image src={"https://via.placeholder.com/750x300"} fluid />
        </Col>
      </Row>
      <br/>
     
      <Link href={`${basePath}/books`}>
        {/* <a>Books</a> */}
        <Button variant="primary" size="lg" block>
         View the available books
        </Button>
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
