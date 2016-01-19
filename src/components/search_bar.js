import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term){
    console.log(term);
    this.setState({ term });
    this.props.onSearchNameChange(term)
  }

  render() {
    //remember to use .bind(this)
    return(
      <div className="search-bar">
        <input onChange = { event => this.onInputChange(event.target.value) }
          value = { this.state.term }
        />
      </div>
      )
  }
}

export default SearchBar