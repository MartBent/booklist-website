import { useEffect, useState } from 'react'
import './App.css'
import { Book, get_books, increment_book, decrement_book, add_book, delete_book } from './components/book'

function App() {

    const [books, setBooks] = useState([]);

    function update_books() {
        get_books().then(response => {
            let new_books = response.data.map((book) => {
                let progress = Math.round(book.pages_read / book.page_amount * 100, 2)
                book.progress = progress;
                return book;
            });
            setBooks(new_books);
        });
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
                            <button onClick={() => { increment_book(book).then(() => { update_books() }) }}>Increment</button>
                            <button onClick={() => { decrement_book(book).then(() => { update_books() }) }}>Decrement</button>
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
