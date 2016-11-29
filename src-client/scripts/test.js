/* I'm trying to figure out how to render playlists*/
import $ from 'jquery'
import Spotify from 'spotify-web-api-js'

var s = new Spotify();

// fetch event data from bekah
const fetchBackEnd = function(userInputLocation = 'Columbia'){
  return $.ajax({
    url: `/whosplayin/${userInputLocation}`,
    method: "GET"
  });
}

// let eventsListNames = 'lil wayne'
// input variable into spotify query
const fetchArtist = function(artist){
  console.log(`artist list fetched`);
  return $.ajax({
    url: `https://api.spotify.com/v1/search?q=${artist.split(' ').join('+')}&type=artist`,
    method: `GET`
  });
}
// const artistSpotifyID = artists.items[0].uri
// const artistImg = artists.items[0].images[2]
// fetchBackEnd.map(fetchArtists);

// render top track URIs into iframe
const fetchTopTracks = function(artistId){
  return $.ajax({
    url: `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=US`,
    method: `GET`
  });
}

module.exports = {
  fetchBackEnd,
  fetchArtist,
  fetchTopTracks
}
// const artistSpotifyID = artists.items[0].uri
// const artistImg = artists.items[0].images[2]
