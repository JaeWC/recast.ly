var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      'q': options.query,
      'maxResults': options.max,
      'key': options.key,
      'part': 'snippet',
      'type': 'video'
    },
    success: function(data) {
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
