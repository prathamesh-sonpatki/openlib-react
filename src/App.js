var React = require('react');
var BookList = require('./BookList');
var $ = require('jquery');

var App = React.createClass({
  getInitialState(){
    return (
      { query: '', books: []}
    );
  },

  handleChange(event) {
    this.setState({
      query: event.target.value}
    );
  },

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.query === '') {
      alert('Please enter a query');
    } else {
      var url = `http://openlibrary.org/search.json?q=${this.state.query}`;
      $.get(url).done((data) => {
        var data = JSON.parse(data).docs;

        this.setState({
          books: data.map((book) => {
            return ({author: book['author_name'] && book['author_name'][0],
                     name: book.title
            });
          })
        });
      });
    }
  },

  render() {
    return (
      <div>
        <h1>Open Library</h1>
        <h3> Books </h3>

        <input type="text"
               placeholder="Search books"
               onChange={this.handleChange}
        />

        <input type="submit"
               value="Search"
               onClick={this.handleSubmit}
        />

        <BookList books={this.state.books} />
      </div>
    );
  }
});

module.exports = App;
