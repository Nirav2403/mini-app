import React from 'react';
import VideoItem from "./VideoItem";

export default class videoList extends React.Component {

    render() {
        const VideoList = this.props.videos.map((video,key) => {
            return <div key={key}> <VideoItem onvideoSelect={this.props.onvideoSelect} video={video} /> <hr /></div>
        })
        
        return (
          <div className="ui relaxed divided list">{VideoList}</div>
        );
    }
}
