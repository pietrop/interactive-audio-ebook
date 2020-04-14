import {useState} from 'react';
import { useRouter } from 'next/router';

const getData = async (id)=>{
    return import( `../../../prep-utils/json/${id}.json`).then(({default: myData}) => myData);
   }

const Chapter = () => {
  const router = useRouter()
  const { chapterId, bookId } = router.query
  const [chapterData, setChapterData] = useState();
  const [bookTitle, setBookTitle] = useState("");
  getData(bookId).then((res)=>{
    console.log('data 59', res);
    // setBookData(res);
    console.log('chapterId',chapterId)
    setBookTitle(res.title);
    // adjusting chapter id with array index
    const currentChapter = res.chapters[parseInt(chapterId)-1];
    setChapterData(currentChapter)
   }).catch((err)=>{
     console.error("couldn 't find book id", bookId)
   })

return (<>
  <style jsx>{`
     .before {
      color: black;
  }
  
  .after {
      color: grey;
  }
  
  
  /* for index page */
  
  .transcriptBtn {
      border: 0.1rem solid lightgrey;
      border-radius: 0.5em;
      padding: 0.5em;
      font-family: Retina, Arial, Helvetica, sans-serif;
      color: #333;
      font-weight: 200;
  }
  
  .transcriptBtn:hover {
      background-color: lightgray;
      color: white;
  }
  
  .article_title {
      font-family: Escrow Condensed, Georgia, serif;
      font-weight: 700;
      font-size: 30px;
      line-height: 34px;
      color: #333;
  }
  
  h2.article_title {
      margin-top: 0.5em;
      margin-bottom: 0.2em;
  }
  
  .description {
      font-family: Retina, Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #666;
  }
  
  ul {
      list-style-type: none;
  }
  
  li a {
      color: black;
      text-decoration: none;
  }
  
  li {
      padding-bottom: 0.5em;
  }
  
  hr {
      border-top: 1px solid lightgrey;
  }
  
  
  /* for show page */
  
  .article_header {
      margin-top: 10vh;
      /* margin-bottom: 4px; */
      font-size: 40px;
      line-height: 1.2em;
      font-family: Escrow Condensed, Chronicle Display, serif;
      font-weight: 700;
  }
  
  .words {
      cursor: pointer;
      margin-bottom: 17px;
      font-size: 17px;
      line-height: 27px;
      word-wrap: break-word;
      font-family: Exchange, Chronicle SSm, serif;
      font-weight: 400;
  }
  
  .words:hover:before {
      content: "▶";
      color: blue;
      opacity: 0.6;
      position: absolute;
      margin-top: -12px;
  }
  
  .containerAudio {
      position: fixed;
      background-color: white;
      height: 3em;
      padding-bottom: 1em;
      padding-top: 0.5em;
      top: 0px;
  }
  
  audio {
      /* display: none; */
      width: 100%;
  }
  
  
  /* Mobile phones */
  
  @media only screen and (max-width: 768px) {
      .container {
          width: 100%;
      }
      .containerAudio {
          width: 100%;
      }
  }
  
  
  /* Tablets, Ipads (portrait) */
  
  @media (min-width: 769px) and (max-width: 1024px) {
      .container {
          width: 70%;
          padding-left: 15%;
          padding-right: 15%;
      }
      .containerAudio {
          width: 70%;
          padding-left: 15%;
          padding-right: 15%;
      }
  }
  
  
  /* Laptops, Desktops */
  
  @media (min-width: 1025px) and (max-width: 1280px) {
      .container {
          width: 50%;
          padding-left: 25%;
          padding-right: 25%;
      }
      .containerAudio {
          width: 50%;
          padding-left: 25%;
          padding-right: 25%;
      }
  }
  
  
  /* Desktops */
  
  @media (min-width: 1281px) {
      .container {
          width: 50%;
          padding-left: 25%;
          padding-right: 25%;
      }
      .containerAudio {
          width: 50%;
          padding-left: 25%;
          padding-right: 25%;
      }
  }
  `}</style>
  <style jsx global>{`
  
  `}</style>
    <h2>{chapterData && chapterData.title} - {bookTitle&&bookTitle}</h2>
  {chapterData && chapterData.duration} 
  {chapterData && ( <audio src={chapterData.url} controls type={chapterData.type} /> )}
 
  {chapterData && chapterData.text}
  
  </>)
}

export default Chapter

Chapter.getInitialProps = async ctx => {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    return { }
}