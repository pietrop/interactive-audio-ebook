import {useState} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import data from '../../prep-utils/json/59.json';
// const DynamicComponent = dynamic(() => import('../../prep-utils/json/59.json'))
const getData = async (id)=>{
 return import( `../../prep-utils/json/${id}.json`).then(({default: myData}) => myData);
}



const Book =  () => {
  const router = useRouter();
  const { bookId } = router.query;
  const [bookData, setBookData] = useState();

  // const [foo, setFoo] = useState([]);


   getData(bookId).then((res)=>{
    console.log('data 59', Array.from(res));
    // setBookData(res);
    setBookData(res)
   }).catch((err)=>{
     console.error('couldn\'t find book id', bookId)
   })



  return (<>
  { bookData && <>
    <h2><b>Book:</b>{bookData.title}</h2>
    <a href={bookData.link} target="_blank" rel="noopener noreferrer">LibriVox</a> | <a href={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/${bookData.gutembergId}-h.htm`} target="_blank" rel="noopener noreferrer">Gutenberg</a>

    <br/>
    <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/bookcover.jpg`} style={{width:'200px',height:'auto'}}/>
    <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/frontispiece.jpg`} style={{width:'200px', height:'auto'}}/>
    <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/titlepage.jpg`} style={{width:'200px', height:'auto'}}/>


    <p>{bookData.description}</p>
  </> }

  <ul>
  { bookData && bookData.chapters.map((chapter) => (
    <li>
      <Link href="/books/[bookId]/[chapterId]" as={`/books/${bookId}/${chapter.chapter}`}>
       <a>{chapter.title} - {chapter.duration} </a> 
      </Link>
    </li>
  ))
}
    </ul>



  </>)
}

export default Book