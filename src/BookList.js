var React = require('react');
var Book = require('./Book');

var BookList = React.createClass({
  _renderBooks(){
    return (
      this.props.books.map((book) => {
        return <Book book={book} />;
    }));
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
