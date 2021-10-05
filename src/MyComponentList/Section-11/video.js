import React from "react";
import SearchBar from "./Searchbar";
import youtube from "./youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

export default class extends React.Component {
    state = { videos: [], videoSelected: null };
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items,
            videoSelected: response.data.items[0]
        })
    }
    componentDidMount(){
        this.onTermSubmit('react tutorial')
    }

    onvideoSelect = (video) => {
        this.setState({ videoSelected: video })
    }
    render() {
        return (
            <>
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.videoSelected} />
                            </div>
                            <div className="five wide column">
                                <VideoList onvideoSelect={this.onvideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}