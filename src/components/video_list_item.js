import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video === const video = video
  //if instead of props we pass {video}
  const imgUrl = video.snippet.thumbnails.default.url
  const videoTitle = video.snippet.title
  return(
    <li
      onClick={() => onVideoSelect(video)}
      className = "list-group-item"
      style={ {cursor: 'pointer'} } >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>
      </div>
    </li>
    )
}

export default VideoListItem