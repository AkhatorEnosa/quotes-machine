import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      quotes: []
    }
  }
 
    componentDidMount() {
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => this.setState({ quotes: data}))
    }

    newQuote = () => {
      this.componentDidMount();
    }
  
  render() {
    var quotes = this.state.quotes;
    var randomNum = Math.floor(Math.random() * quotes.length);
    
    if (this.state.quotes.length === 0) {
      return (
        <div id="quote-box">
          <p class="loading">Loading...</p>
        </div>
      )
    } else {
      var quoteText = quotes[randomNum].text;
      var quoteAuthor = "- "+quotes[randomNum].author;

      return (
        <div id="quote-box">
          <p id="text"><span class="quote-mark">"</span>{quoteText}</p>
          <p id="author">{quoteAuthor}</p>
          <div id="link-and-btn">
            <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=" + quoteText + quoteAuthor} target="_blank" rel="noreferrer">Tweet Quote</a>
            <a id="new-quote" href="#" onClick={this.newQuote}>New Quote</a>
          </div>
        </div>
      )
    }
  }
}

export default App;
