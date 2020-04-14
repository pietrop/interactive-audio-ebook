import Link from 'next/link';
const bookData = {
  gutembergId: 76
}
function Books() {
    const pids = ['59', '60', '61']

    return (<><h2>Books</h2>
    
    <ul>
    { pids.map(bookId => (
        <li>
          <Link href="/books/[bookId]" as={`/books/${bookId}`}>
            <a>bookId {bookId}
            {/* <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/bookcover.jpg`} style={{width:'200px',height:'auto'}}/> */}
            {/* <img src={`https://www.gutenberg.org/files/${bookData.gutembergId}/${bookData.gutembergId}-h/images/frontispiece.jpg`} style={{width:'200px', height:'auto'}}/> */}

            </a>
          </Link>
        </li>
      ))
    }
    </ul>
    
    </>)
  }
  
  export default Books