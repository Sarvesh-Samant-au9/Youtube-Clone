import "./App.css";
import React from "react";
import SearchBar from "./Components/SearchBar";
import utube from "./Api/youtube";
import Videolist from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("React Tutorials by Codevolution");
  }
  onTermSubmit = async (term) => {
    // console.log(term);
    const response = await utube.get("/search", {
      params: {
        q: term,
      },
    });
    // console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
    // console.log(this.state);
    // <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
    // {this.state.videos.length} Video
  };
  onVideoSelect = (video) => {
    // console.log(video, "got from onVIDOESELECT");
    this.setState({ selectedVideo: video });
    // console.log(this.state);
  };
  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <Videolist
                getVideos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
