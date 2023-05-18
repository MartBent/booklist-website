import { Component } from "react";
import ReactDOM from "react-dom";

class BookComponent extends Component {
  constructor(props) {
    super(props);
    this.incClicked = this.incClicked.bind(this);
    this.decClicked = this.decClicked.bind(this);
    this.delClicked = this.delClicked.bind(this);
  }

  incClicked(event) {
    event.preventDefault();
    const { book } = this.props;
    const { increase } = this.props;
    increase(book);
  }

  decClicked(event) {
    event.preventDefault();
    const { book } = this.props;
    const { decrease } = this.props;
    decrease(book);
  }

  delClicked(event) {
    event.preventDefault();
    const { book } = this.props;
    const { remove } = this.props;
    remove(book);
  }

  render() {
    const { book } = this.props;

    return (
      <div className="book">
        <img className="image" src={book.cover_img_src} />
        <h3>{book.title}</h3>
        <h5>
          {book.pages_read}/{book.page_amount} - ({book.progress}%)
        </h5>

        <div className="buttons">
          <button className="btn" onClick={this.decClicked}>
            -
          </button>
          <button className="btn" onClick={this.incClicked}>
            +
          </button>
          <button className="del" onClick={this.delClicked}>
            x
          </button>
        </div>
      </div>
    );
  }
}

export default BookComponent;
