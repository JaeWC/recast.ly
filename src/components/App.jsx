class App extends React.Component {
  constructor() {
    super();
    this.options = {
      key: window.YOUTUBE_API_KEY,
      query: '',
      max: 6
    };

    this.state = {
      currentVideo: window.exampleVideoData[1],
      videoList: [],
    };

    window.searchYouTube(this.options, videos => {
      this.setState({
        currentVideo: videos[0],
        videoList: videos.slice(1)
      });
    });
  }

  changeVideo(video) {
    this.setState({currentVideo: video});
  }

  searchVideo(event) {
    this.options.query = event.target.value;
    searchYouTube(this.options, data => {
      this.setState({
        currentVideo: data[0],
        videoList: data.slice(1)
      });
    });
  }

  render() {
    return (
      <div>
        <Nav search={this.searchVideo.bind(this)} />
        <div>
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList}
              play={this.changeVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
