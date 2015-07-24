var React = require('react');

var Book = {
  name: 'jQuery in Action',
  author: 'John Resig'
};

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Open Library</h1>
        <h3> Books </h3>

        <div className="book-container">
          <img src="https://covers.openlibrary.org/b/olid/OL9701406M-S.jpg"
               className="book-cover"
               height="100" />
          <div>
            <h2>Lord of the Rings</h2> by
            <h3 className="book-author"> Doug Moe </h3>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = App;
