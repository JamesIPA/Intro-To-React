import API_KEY from './api_key'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

//////////////////////////////////////////////////////////////////
//Create a new component. This component should produce some HTML.
class App extends Component{
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
            //When the key and the variable name are the same we can just pass in the name instead of {name: name}
            this.setState({videos})
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

///////////////////////////////////////////////////////////////////////////
//Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
