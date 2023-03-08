export function getBooks() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        let book = {
            id: i,
            title: "Book " + i,
            counter: Math.floor(Math.random() * 100)
        };
        result[i] = book;
    }
    return result;
}

export function Book(props) {
    return <div key={props.id}>
        <img src="https://media.s-bol.com/Y01DzmKyln1O/xnzqmJP/548x840.jpg" style={{
            height: "100%",
            width: "100%",
        }} />
        <h3>{props.title}</h3>
        <h5>{props.count}</h5>
    </div>;
}
