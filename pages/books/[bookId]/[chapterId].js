import {useState, useRef} from 'react';
import { useRouter } from 'next/router';
import calculateWordDuration from '../../../utils/calculate-word-duration';
const getData = async (id)=>{
    return import( `../../../prep-utils/json/${id}.json`).then(({default: myData}) => myData);
   }

const Chapter = () => {
  const router = useRouter()
  const { chapterId, bookId } = router.query
  const [chapterData, setChapterData] = useState();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [bookTitle, setBookTitle] = useState("");
  const audioRef = useRef();
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

   const handleTextClick = (e)=>{
       const index = parseInt(e.target.id);
       setCurrentWordIndex(index);
    //    console.log()
       const wordList = chapterData.text.split(' ');
       const removeCount = wordList.length - index;
       wordList.splice( index, removeCount )
       const estimatedTimeOffset = wordList.reduce((total, word)=>{
            const wordDuration = calculateWordDuration(word);
            total += parseFloat(wordDuration);
            return total;
       }, 0)

       console.log('estimatedTimeOffset',estimatedTimeOffset)
       audioRef.current.currentTime  = estimatedTimeOffset;
       audioRef.current.play()
   }


return (<>
  <style jsx>{`
  
  .words {
      cursor: pointer;
      margin-bottom: 17px;
      font-size: 17px;
      line-height: 27px;
      word-wrap: break-word;
  }
  
  .words:hover:before {
      content: "▶";
      color: #008cba;
    //   opacity: 0.6;
      position: absolute;
      margin-top: -12px;
  }
  .past-words{
    color: black
  }

  .future-words{
    color: grey
  }

  audio{
    position: fixed;
    bottom: 0;
    left: 0px;
    width: 100%;
}


  .duration{
    font-size: medium;
}
  `}</style>
  <style jsx global>{`
 
  
  `}</style>
    <h2>{chapterData && chapterData.title} - {bookTitle&&bookTitle} <span className="duration">{chapterData && chapterData.duration} </span></h2>
  
  <br/>
  <br/>
  {chapterData && ( <audio  ref={audioRef} src={chapterData.url} controls type={chapterData.type} /> )}
  <article onClick={handleTextClick}>
    {chapterData && chapterData.text.split(' ').map((word, index)=>{ return <span className={["words", index <= currentWordIndex?  "past-words":"future-words"].join(' ')} id={index}>{word} </span>})}
  </article>
  <br/>
  <br/>
  <br/>
  <br/>

  
  </>)
}

export default Chapter

Chapter.getInitialProps = async ctx => {
    // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    // const json = await res.json()
    return { }
}