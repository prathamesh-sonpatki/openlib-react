var React = require('react');
var Book = require('./Book');

var BookList = React.createClass({
  propTypes: {
    books: React.PropTypes.array.isRequired
  },

  _logger(book) {
    console.log(`Book name - ${book.name}`);
  },

  _renderBooks(){
    return (
      this.props.books.map((book) => {
        return <Book book={book}
                     logger={this._logger} />;
      })
    );
  },

  render() {
    return (
      <div>
        {this._renderBooks()}
      </div>
    );
  }
});

module.exports = BookList;
