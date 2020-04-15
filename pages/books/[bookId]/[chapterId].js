import {useState, useRef,useEffect} from 'react';
import { useRouter } from 'next/router';
import calculateWordDuration from '../../../utils/calculate-word-duration';
const getData = async (id)=>{
    return import( `../../../prep-utils/json/${id}.json`).then(({default: myData}) => myData);
   }

const Chapter = () => {
  const router = useRouter()
  const { chapterId, bookId } = router.query
  const [chapterData, setChapterData] = useState();
  // const [currentWordStartTime, setcurrentWordStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [bookTitle, setBookTitle] = useState("");
  const audioRef = useRef();
  getData(bookId).then((res)=>{
    // console.log('data 59', res);
    // setBookData(res);
    // console.log('chapterId',chapterId)
    setBookTitle(res.title);
    // adjusting chapter id with array index
    const currentChapter = res.chapters[parseInt(chapterId)-1];
    setChapterData(currentChapter)
   }).catch((err)=>{
     console.error("couldn 't find book id", bookId)
   })

  //  audioRef && audioRef.current && audioRef.current
  //  .addEventListener("timeupdate", (el)=>{
  //    // console.log(el.target.currentTime)
  //    if(typeof window !=='undefined'){
  //      setCurrentTime(el.target.currentTime)
  //    }    
  //  });

  useEffect(() => {

    audioRef && audioRef.current && audioRef.current
   .addEventListener("timeupdate", (el)=>{
     // console.log(el.target.currentTime)
     if(typeof window !=='undefined'){
       setCurrentTime(el.target.currentTime)
     }    
   });

  }, []);

   const handleTextClick = (e)=>{
      if(e.target.classList.contains('words')){
        const index = parseFloat(parseFloat(e.target.dataset.start).toFixed(2));
        console.log('index',index);
        //  setcurrentWordStartTime(index);
        setCurrentTime(index);
        audioRef.current.currentTime  = index;
        audioRef.current.play();
      }
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
  `}</style>
  <style jsx global>{`
 
  
  `}</style>
    <h2>{chapterData && chapterData.title} - {bookTitle&&bookTitle}  <small className="text-muted"> {chapterData && chapterData.duration} </small></h2>
  
  <br/>
  <br/>
  {chapterData && ( <audio  ref={audioRef} src={chapterData.url} controls type={chapterData.type} /> )}
  <article onClick={handleTextClick}>
  
    {chapterData &&  chapterData.words && chapterData.words.map((word, index)=>{ return <span className={["words", word.start <= currentTime?  "past-words":"future-words"].join(' ')} data-start={word.start} id={index}>{word.text} </span>})}
    {/* Backup  */}
    {chapterData &&  !chapterData.words && chapterData.text}
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