import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import  Container  from 'react-bootstrap/Container';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath;
import "bootswatch/dist/yeti/bootstrap.min.css"; 

// // const getBooks = require('../utils/list-files/list-books.js');
// // const books = getBooks();

// function findBook(id){
// //   return books.find((book)=>{
// //         book.librivoxBookId ===id
// //     })
// }


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const { bookId,chapterId } = router.query;
  return <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=2.0"/>
    <link crossorigin rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dmhendricks/bootstrap-grid-css@4.1.3/dist/css/bootstrap-grid.min.css" />
   <title>Interactive audio ebooks</title>
   </Head>
        <Navbar bg="primary"  variant="dark" expand="sm" fixed="top">
        <Navbar.Brand href={`${basePath}/`}>Interactive audio ebooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href={`${basePath}/books`}>Books</Nav.Link>
            {bookId? <Nav.Link href={`${basePath}/books/${bookId}`}>Current Book</Nav.Link> :null}
            {chapterId? <Nav.Link href={`${basePath}/books/${bookId}/${parseInt(chapterId)-1}`}>Previous Chapter</Nav.Link> :null}
            {chapterId? <Nav.Link href={`${basePath}/books/${bookId}/${parseInt(chapterId)+1}`}>Next Chapter</Nav.Link> :null}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        <br/><br/><br/><br/>
        <Container>
    <Component {...pageProps} />
    </Container>
  </>;
}