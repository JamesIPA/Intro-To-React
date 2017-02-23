import _ from 'lodash';
import API_KEY from './api_key'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search';

//////////////////////////////////////////////////////////////////
//Create a new component. This component should produce some HTML.
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term:term}, (videos) => {
            this.setState({
                videos: videos,
                //initialise the selected video as the top search result to ensure VideoDetail rerenders
                selectedVideo: videos[0]
            })
        });
    }
}

///////////////////////////////////////////////////////////////////////////
//Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
