import Link from 'next/link';
import getConfig from 'next/config';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath;

function Books() {
  // http://www.gutenberg.org/ebooks/search/?query=tom+sawyer
    const pids = ['59']
    return (<><h2>Books</h2>
    <br/>
    <br/>
    <Row>


    { pids.map(bookId => (
        <Col>
          <Link href={`${basePath}/books/[bookId]`} as={`${basePath}/books/${bookId}`}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/750" fluid />
            <Card.Body>
              <Card.Title> bookId {bookId} </Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              {/* <Button variant="primary">Listen/Read</Button> */}
            </Card.Body>
            </Card>
          </Link>
          <br/>
        </Col>
      ))
    }
    </Row>

    
    </>)
  }
  
  export default Books