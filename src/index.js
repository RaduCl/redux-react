import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search'
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'
//youtube api key
const API_KEY = 'AIzaSyAB209EdcURuXynD90XgM8hhpQDC4Kh5qw'

class App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: [] }

    YTsearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //this.setState({videos}) === this.setState({videos: videos})
      this.setState({videos})
    })
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] } />
        <VideoList videos = { this.state.videos } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
