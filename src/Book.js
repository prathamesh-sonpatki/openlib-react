var React = require('react');

var Book = React.createClass({
  render() {
    return (
      <div className="book-container">
        <img src={this.props.book.cover}
             className="book-cover"
             height="100" />
        <div>
          <h2>
            {this.props.book.name}
          </h2>
          <h3 className="book-author">
            by {this.props.book.author}
          </h3>
        </div>
      </div>
    );
  }
});

module.exports = Book;
