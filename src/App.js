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
      alert(this.state.query);
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

        <BookList books={books} />
      </div>
    );
  }
});

module.exports = App;
