import React from 'react';
import VideoListItem from './video_list_item'

//Functional component because it doesn't require state.
const VideoList = (props) => {

    //arrays.map works like the streams map in java and returns a mapped array
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
                video={video} />
        )
    });

    return (
        //React correctly renders the array of components
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
