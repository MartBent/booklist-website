import { useEffect, useState } from 'react'
import './App.css'
import { Book, getBooks } from './components/book'

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then(response => setBooks(response.data));
    }, []);

    return (
        <div className="App">
            <div className="book-container">
                {
                    books.map(book => {
                        return <div className='single-book'>
                            <Book key={book.id} id={book.id} title={book.title} progess={book.progress} cover_img_src={book.cover_img_src}></Book>
                        </div>
                    })
                }
            </div>
            <button onClick={() => {
                getBooks().then(response => setBooks(response.data))
            }}>Update</button>
        </div >
    )
}
export default App
