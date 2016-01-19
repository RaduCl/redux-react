import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search'
import _ from 'lodash'
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'
//youtube api key
const API_KEY = 'AIzaSyAB209EdcURuXynD90XgM8hhpQDC4Kh5qw'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surf')
  }

  videoSearch(term) {
      YTsearch({key: API_KEY, term: term}, (videos) => {
      //this.setState({videos}) === this.setState({videos: videos})
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500)

    return(
      <div>
        <SearchBar onSearchNameChange={ term => this.videoSearch(term) } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos = { this.state.videos }
          />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
