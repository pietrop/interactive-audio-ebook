import {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath;

const getData = async (id)=>{
 return import( `../../prep-utils/json/${id}.json`).then(({default: myData}) => myData);
}

const Book =  () => {
  const router = useRouter();
  const { bookId } = router.query;
  const [bookData, setBookData] = useState();

   getData(bookId).then((res)=>{
    console.log('data 59', Array.from(res));
    // setBookData(res);
    setBookData(res)
   }).catch((err)=>{
     console.error('couldn\'t find book id', bookId)
   })

  return (<>
  { bookData && <>
    <h2>{bookData.title}</h2>
    <br/>
    <Row>
      <Col xs={{span:12, order:2}} sm={{span:6, order:1}} md={{span:6, order:1}} lg={{span:6, order:1}} xl={{span:6, order:1}}>
        <h3>Chapters</h3>
      <ul>{
        bookData && bookData.chapters.map((chapter) => (
        <li>
          <Link href={`${basePath}/books/[bookId]/[chapterId]`} as={`${basePath}/books/${bookId}/${chapter.chapter}`}>
          <a>{chapter.title} - {chapter.duration} </a> 
          </Link>
        </li>
        ))}  
      </ul>
      </Col>
      <Col xs={{span:12, order:1}}  sm={{span:6, order:2}} md={{span:6, order:2}} lg={{span:6, order:2}} xl={{span:6, order:2}}>
          <br/>
          <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/bookcover.jpg`} style={{width:'30%',height:'auto'}}/>
          <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/frontispiece.jpg`} style={{width:'30%', height:'auto'}}/>
          <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/titlepage.jpg`} style={{width:'30%', height:'auto'}}/>
          <h4>Summary</h4>
          <p>{bookData.description}</p>
          <a href={bookData.link} target="_blank" rel="noopener noreferrer">LibriVox</a> | <a href={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/${bookData.gutembergId}-h.htm`} target="_blank" rel="noopener noreferrer">Gutenberg</a>
      </Col>
    </Row>
    <br/>
    
  </> }
  </>)
}

export default Book



Book.getInitialProps = async ctx => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  return {  }
}