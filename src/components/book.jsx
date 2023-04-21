export function Book(props) {
    let book = props.book;
    return <div key={book.id}>
        <img src={book.cover_img_src} />
        <h3>{book.title}</h3>
        <h5>{book.pages_read}/{book.page_amount}({book.progress}%)</h5>
    </div>;
}
