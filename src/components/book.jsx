import axios from 'redaxios'

const baseURL = "https://api.martbent.com/";
//const baseURL = "http://localhost:9090"

export function get_books() {
    return axios({
        method: 'get',
        url: baseURL,
    });
}

export function add_book() {
    let book = { "id": 1, "title": "Lord of the flies", "page_amount": 180, "cover_img_src": "https://media.s-bol.com/Y01DzmKyln1O/xnzqmJP/548x840.jpg" };
    return axios({
        method: 'post',
        url: baseURL,
        data: book,
        headers: { 'Content-Type': 'text/json' },
    });
}

export function delete_book(book_id) {
    let id_num = parseInt(book_id);
    let data = { id: id_num };
    return axios({
        method: 'delete',
        url: baseURL,
        data: data,
        headers: { 'Content-Type': 'text/json' },
    });
}

export function Book(props) {
    let book = props.book;
    let progress = Math.round(1 / book.page_amount * 100, 2)
    return <div key={book.id}>
        <img src={book.cover_img_src} />
        <h3>{book.title}</h3>
        <h5>{progress}%</h5>
    </div>;
}
