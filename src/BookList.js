var React = require('react');
var Book = require('./Book');

var BookList = React.createClass({
  getInitialState() {
    return (
      { loading: true }
    );
  },

  propTypes: {
    books: React.PropTypes.array.isRequired
  },

  _logger(book) {
    console.log(`Book name - ${book.name}`);
  },

  _renderBooks(){
    return (
      this.props.books.map((book, index) => {
        return <Book book={book}
                     key={index}
                     logger={this._logger} />;
      })
    );
  },

  render() {
    console.log(this.state);

    return (
      <div>
        {this._renderBooks()}
      </div>
    );
  }
});

module.exports = BookList;
