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
        <Col>
          
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://www.gutenberg.org/files/${book.gutembergId}/${book.gutembergId}-h/images/bookcover.jpg`} fluid />
            <Card.Body>
              <Card.Title> {book.title}</Card.Title>
              <Card.Text title={book.description}>
                {book.description.substr(0, 200)}...
              </Card.Text>
              <Link href={`${basePath}/books/[bookId]`} as={`${basePath}/books/${book.librivoxBookId}`}>
               <Button variant="primary" block>Listen/Read</Button>
              </Link>
            </Card.Body>
            </Card>
  
          <br/>
        </Col>
      ))
    }
    </Row>

    
    </>)
  }
  
  export default Books


