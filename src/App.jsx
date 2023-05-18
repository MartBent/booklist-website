import { useEffect, useState } from "react";
import "./App.css";
import { get_books, edit_book, delete_book } from "./BookApi";
import { BookInputForm } from "./components/book_input_form";
import BookComponent from "./components/book_component";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    refresh_books();
  }, []);

  function refresh_books() {
    get_books().then((response) => {
      let new_books = response.data.map((book) => {
        let progress = Math.round(
          (book.pages_read / book.page_amount) * 100,
          2
        );
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
    });
  }

  function increase(book) {
    if (book.page_amount == book.pages_read) return;
    update_book(book, 1);
  }

  function decrease(book) {
    if (book.pages_read == 0) return;
    update_book(book, -1);
  }
  function remove(book) {
    if (confirm("Are you sure?")) {
      delete_book(book.id).then(() => {
        refresh_books();
      });
    }
  }

  return (
    <div className="App">
      <div className="book-container">
        {books.map((book) => {
          return (
            <BookComponent
              key={book.id}
              book={book}
              increase={increase}
              decrease={decrease}
              remove={remove}
            />
          );
        })}
        <BookInputForm submit={refresh_books}></BookInputForm>
      </div>
    </div>
  );
}
export default App;
