/* I'm trying to figure out how to render playlists*/
import $ from 'jquery'
import fakeMetroID from 'fakemetroid'
/* This function takes in a metro area
and gets the top 5 most popular tracks for all artists*/
const artistMetadata = function(){
  let artistID = this.
  $.get('https://api.spotify.com/v1/artists/'+ artistID +'/top-tracks', function(){

  });
}
/* We then use the map function for each returned result*/
const artistInMetro = fakeMetroID.map(artistMetadata)
/* We export this to the bandview
and homeview as data for playlists*/
module.exports artistInMetro
