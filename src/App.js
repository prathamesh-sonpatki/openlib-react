var React = require('react');

var BookList = [{ name: 'jQuery in Action',
                  author: 'John Resig',
                  cover: 'https://covers.openlibrary.org/b/olid/OL25431312M-S.jpg'},
                {name: 'Head first jQuery',
                 author: 'Ryan Benedetti',
                 cover: 'https://archive.org/download/headfirstjquery00bene/page/cover_w60_h60.jpg'}];

var App = React.createClass({
  _renderBook(book) {
    return (
      <div className="book-container">
        <img src={book.cover}
             className="book-cover"
             height="100" />
        <div>
          <h2>
            {book.name}
          </h2>
          <h3 className="book-author">
            by {book.author}
          </h3>
        </div>
      </div>
    );
  },

  render() {
    var books = BookList.map((book) => {
      return this._renderBook(book);
    });

    return (
      <div>
        <h1>Open Library</h1>
        <h3> Books </h3>
        {books}
      </div>
    );
  }
});

module.exports = App;
