import { useEffect, useState } from 'react'
import './App.css'
import { Book } from './components/book'
import { get_books, edit_book, delete_book } from './BookApi';
import { BookInputForm } from './components/book_input_form';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        refresh_books();
    }, []);

    function refresh_books() {
        get_books().then(response => {
            let new_books = response.data.map((book) => {
                let progress = Math.round(book.pages_read / book.page_amount * 100, 2)
                book.progress = progress;
                return book;
            });
            setBooks(new_books);
        });
    }

    function update_book(book, page_amount) {
        book.pages_read += page_amount;
        edit_book(book).then(() => {
            refresh_books();
        })
    }

    function insert_book() {
 
    }

    return (
        <div className="App">
            <div className="book-container">
                {
                    books.map(book => {
                        return <div key={book.id} className='single-book'>
                            <Book book={book}></Book>
                            <button style={{ width: '50%' }} onClick={() => { update_book(book, 1) }}>Inc</button>
                            <button style={{ width: '50%' }} onClick={() => { update_book(book, -1) }}>Dec</button>
                            <button onClick={() => { delete_book(book.id).then(() => { refresh_books() }) }}>Delete</button>
                        </div>
                    })
                }
                <BookInputForm></BookInputForm>
            </div >
        </div >
    )
}
export default App
