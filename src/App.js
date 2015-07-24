var React = require('react');
var BookList = require('./BookList');

var books = [{ name: 'jQuery in Action',
                  author: 'John Resig',
                  cover: 'https://covers.openlibrary.org/b/olid/OL25431312M-S.jpg'},
                {name: 'Head first jQuery',
                 author: 'Ryan Benedetti',
                 cover: 'https://archive.org/download/headfirstjquery00bene/page/cover_w60_h60.jpg'}];

var App = React.createClass({
  getInitialState(){
    return (
      { query: ''}
    );
  },

  handleChange(value) {
    alert(event.target.value);
  },

  render() {
    return (
      <div>
        <h1>Open Library</h1>
        <h3> Books </h3>

        <input type="text"
               defaultValue="jQuery"
               placeholder="Search books from open library"
               onChange={this.handleChange}
        />

        <input type="submit"
               value="Search"
        />

        <BookList books={books} />
      </div>
    );
  }
});

module.exports = App;
