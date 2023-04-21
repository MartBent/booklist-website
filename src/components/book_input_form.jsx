import { useState } from "react"
import "../App.css"
import { add_book } from "../BookApi";

export function BookInputForm() {
    const [book, setBook] = useState({});

    function onSubmit(event) {
        event.preventDefault();
        const title = event.target.title.value;
        const total_pages = parseInt(event.target.totalpages.value);
        const cover_img_src = event.target.coverimgsrc.value;
        var book = {
            title: title,
            page_amount: total_pages,
            pages_read: 0,
            cover_img_src: cover_img_src,
            id: 0
        };
        console.log(book);
        add_book(book);
    }

    return <div> <div className='book-addition'>
        <form onSubmit={(event) => { onSubmit(event) }}>
            <input placeholder="Title" type='text' name="title" />
            <input placeholder="Total pages" type='number' name="totalpages" />
            <input placeholder="Cover image src" type='text' name="coverimgsrc" />
            <input type="submit"></input>
        </form>
    </div>
    </div>
}
