/* I'm trying to figure out how to render playlists*/
import $ from 'jquery'
import Spotify from 'spotify-web-api-js'

var s = new Spotify();

// fetch data from bekah
const fetchBackEnd = function(userInputLocation = 'Columbia'){
  return $.ajax({
    url: `/whosplayin/${userInputLocation}`,
    method: "GET"
  })
  // let shit = $.getJSON('/whosplayin/' + userInputLocation, function(res){
  //   console.log(`event api triggered`, res);
  //   const eventsList = res
  //   // const eventsListNames = res.performance.displayName
  //   return res.responseJSON
  // });
}
let eventsListNames = 'lil wayne'
// input variable into spotify query
const fetchArtists = function(){
  console.log(`artist list fetched`);
  return $.ajax({
    url: `https://api.spotify.com/v1/search?q=${eventsListNames}&type=artist`,
    method: `GET`
  });
}
// const artistSpotifyID = artists.items[0].uri
// const artistImg = artists.items[0].images[2]
// fetchBackEnd.map(fetchArtists);

// render top track URIs into iframe
// const fetchTopTracks = function(){
//   s.getArtistTopTracks('55Aa2cqylxrFIXC767Z865').then( function(res) {
//     console.log(`res3:`, res);
//   )}
// }

module.exports = {
  fetchBackEnd,
  fetchArtists,
  // fetchTopTracks
}
