import axios from 'redaxios'
const baseURL = "https://api.martbent.com/";
//const baseURL = "http://localhost:9090"

export function get_books() {
    return axios({
        method: 'get',
        url: baseURL,
    });
}

export function add_book(book) {
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

export function edit_book(book) {
    return axios({
        method: 'put',
        url: baseURL,
        data: book,
        headers: { 'Content-Type': 'text/json' },
    });
}
