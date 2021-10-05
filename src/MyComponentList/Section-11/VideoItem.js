import React from 'react'

export default class VideoItem extends React.Component {
    render() {
        const {video,onvideoSelect} = this.props
        return (
                <div onClick={()=> onvideoSelect(video)} className="video-item item">
                    <img  src={video.snippet.thumbnails.medium.url} />
                    <div className="content d-inline-block"><div className="header mx-2">{video.snippet.title}</div></div>
                </div>
            
        )
    }
}
