import { useEffect, useState } from 'react'
import './App.css'
import { Book, getBooks } from './components/book'

let initialBooks = getBooks();

function App() {
    
    const [books, setBooks] = useState(initialBooks);

    function updateBooks() {
        const newBooks = books.map(book => {
            if (book.counter == 0) {
                return book;
            }
            return {
                id: book.id,
                title: book.title,
                counter: book.counter - 1,
            }
        });
        setBooks(newBooks);
    };

    useEffect(() => {
        updateBooks();
    }, []);

    return (
        <div className="App">
            <button onClick={() => updateBooks()}>Update</button>
            <div className="book-container">
                {
                    books.map(book => {
                        return <div className='single-book'>
                            <Book key={book.id} id={book.id} title={book.title} count={book.counter}></Book>
                        </div>
                    })
                }
            </div>
        </div >
    )
}
export default App
