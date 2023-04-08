import axios from 'redaxios';

export function getBooks() {
    return axios.get('http://192.168.178.71:9090/books');
}

export function Book(props) {
    return <div key={props.id}>
        <img src={props.cover_img_src} />
        <h3>{props.title}</h3>
        <h5>{props.progess}%</h5>
    </div>;
}
