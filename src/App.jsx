import { useEffect, useState } from 'react'
import './App.css'
import { Book, get_books, delete_book, add_book } from './components/book'

function App() {

    const [books, setBooks] = useState([]);

    function update_books() {
        get_books().then(response => setBooks(response.data));
    }

    useEffect(() => {
        update_books();
    }, []);

    return (
        <div className="App">
            <div className="book-container">
                {
                    books.map(book => {
                        return <div className='single-book'>
                            <Book key={book.id} book={book}></Book>
                            <button onClick={() => { delete_book(book.id).then(() => { update_books() }) }}>Delete</button>
                        </div>
                    })
                }
            </div>
            <button onClick={() => {
                add_book().then(() => { update_books() })
            }}>Add</button>
        </div >
    )
}
export default App
