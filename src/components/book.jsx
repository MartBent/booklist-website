export function getBooks() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        let book = {
            id: i,
            coversourceurl: "https://media.s-bol.com/Y01DzmKyln1O/xnzqmJP/548x840.jpg",
            title: "Book " + i,
            pageAmount: 230,
            pagesRead: 150,
        };
        book.progress = Math.round(book.pagesRead / book.pageAmount * 100);
        result[i] = book;
    }
    return result;
}

export function Book(props) {
    return <div key={props.id}>
        <img src={props.coversourceurl} />
        <h3>{props.title}</h3>
        <h5>{props.progess}%</h5>
    </div>;
}
