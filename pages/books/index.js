import Link from 'next/link';
import getConfig from 'next/config';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath;
import booksIndex from '../../prep-utils/books-index.json'

function Books() {

    return (<>
    <h2>Books</h2>
    <br/>
    <br/>
    <Row>


    { booksIndex.map(book => (
        <Col className="d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://www.gutenberg.org/files/${book.gutembergId}/${book.gutembergId}-h/images/bookcover.jpg`} fluid />
            <Card.Body>
              <Card.Title> {book.title}</Card.Title>
              <Card.Text title={book.description}>
                {book.description.substr(0, 200)}...
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Link href={`${basePath}/books/[bookId]`} as={`${basePath}/books/${book.librivoxBookId}`}>
               <Button variant="primary" block>Listen/Read</Button>
              </Link>
            </Card.Footer>
            </Card>
          <br/>
        </Col>
      ))
    }

          <Col  className="d-flex align-items-stretch">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/750x750" fluid />
            <Card.Body>
              <Card.Title> Book sudgestion </Card.Title>
              <Card.Text>
                if you have a sudgestion for a book, from Librivox/Gutemberg that you'd like to see in here, feel free to raise an issue in github.
        
              {/* Adventures of Huckleberry Finn (1884) by Mark Twain is one of the truly great American novels, beloved by children, adults, and literary critics alike. The book tells the story of “Huck” Finn (first ... */}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <a href={`https://github.com/pietrop/interactive-audio-ebook/issues/new?assignees=pietrop&labels=new+book+request&template=new-audio-ebook-request.md&title=`} target="_blank" rel="noopener">
               <Button variant="primary" block>Request a book</Button>
              </a>
            </Card.Footer>
            </Card>
            <br/>     
        </Col>
    </Row>

    
    </>)
  }
  
  export default Books


