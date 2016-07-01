function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var query = getQueryParams(document.location.search);
// just what you searched! (up to 20 char)
var cut = JSON.stringify(query).substr(13,20).slice(0, -2)

function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded
function onYouTubeApiLoad() {
    gapi.client.setApiKey('SECRET_KEY');
    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var search = 'dog'
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        // the actual search term
        q: cut
    });

    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
  // showResponse(response);
  var vidID = response.items[1].id.videoId;
  showMyVid(vidID);
}

function showMyVid(vidID){
  var myVid = "<iframe width='745' height='420' src='https://www.youtube.com/embed/" + vidID + '?autoplay=1' + "' frameborder='0' allowfullscreen></iframe>"
  $('#picture').append(myVid);
}










