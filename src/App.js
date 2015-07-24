var React = require('react');
var BookList = require('./BookList');

var books = [{ name: 'jQuery in Action',
                  author: 'John Resig',
                  cover: 'https://covers.openlibrary.org/b/olid/OL25431312M-S.jpg'},
                {name: 'Head first jQuery',
                 author: 'Ryan Benedetti',
                 cover: 'https://archive.org/download/headfirstjquery00bene/page/cover_w60_h60.jpg'}];

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>Open Library</h1>
        <h3> Books </h3>
        <BookList books={books[0]} />
      </div>
    );
  }
});

module.exports = App;
