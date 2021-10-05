import React from 'react'

export default class videoDetail extends React.Component {
    render() {
        const { video } = this.props;
        console.log(video);
        if (!video) {
            return <div>Loading....</div>
        }
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <>
                <div className="ui embed">
                    <iframe src={videoSrc}></iframe>
                </div>
                <div className="ui segment">
                    <div className="ui header">{video.snippet.title}</div>
                    <p>{video.snippet.description}</p>
                </div>
            </>
        )
    }
}
