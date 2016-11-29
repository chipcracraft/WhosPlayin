import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {fetchBackEnd,
        fetchArtist,
        fetchTopTracks } from './test.js'

const STORE = require('./store.js')
const ACTIONS = require('./actions.js')
let musicShit = []
let catMusicShit = ''
let fak = ''
// componentDidMount() {
//     var element = ReactDOM.findDOWNode(this.refs.dropdown)
//     let(element).ready(function(){
//       let('select').material_select();
//     });
// }

const MainView = React.createClass({
  componentWillMount: function() {
    let locationDataReq = fetchBackEnd('Asheville');
    locationDataReq.then(function(res){
      console.log('res1', res);

      let shortList = res.slice(0, 10)
      let queryPromisesList = shortList.map(function(songKickObj){
        return fetchArtist( songKickObj.performance[0].artist.displayName );
      })
      return $.when( ...queryPromisesList )

    }).then(function(...spotifyQueryResults){
      console.log('the spotify initial query:', spotifyQueryResults );
      let spotifyTopTrackPromisesList = spotifyQueryResults.filter(function(promiseObj){
          return promiseObj[0].artists.items.length > 0
      }).map(function(promiseObj){
          console.log(promiseObj);
          return fetchTopTracks(promiseObj[0].artists.items[0].id)
      })
      return $.when(...spotifyTopTrackPromisesList);
    }).then(function(...topTrackResults){
      console.log(topTrackResults);
      // console.log(topTrackResults.length)
      // topTrackResults.forEach( function(){
      for (var i = 0; i < topTrackResults.length; i++){
        let artistTopTracks = topTrackResults[i]["0"].tracks["0"].id
        console.log(artistTopTracks);
      //   STORE.setStore('currentArtist', artistTopTracks)
      musicShit.push(artistTopTracks)
      };
      if (musicShit.length > 0) {
        fak = musicShit.join(',');
        console.log("waaaaaaaaaaaa", fak);
        let catMusicShit = "https://embed.spotify.com/?uri=spotify:trackset:WhosPlayin:"
        catMusicShit = catMusicShit + fak
        STORE.setStore('currentArtist', catMusicShit)

      }

    })
    // let eventsListNames = performance[0]
    // console.log(eventsListNames);
  },

  _logoutHandler: function(){
    ACTIONS._signOutUser()
  },

  render: function(){
    if(!this.props.currentArtist){
      return(
        <p>loadddinnn</p>
      )
    }
    return (
      <div className="wrapper">
        <div className="hero">
          <div className="input-field">
            <select ref="dropdown" defaultValue="1">
              <option value="" disabled> Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo center">whosplayin</a>
              <ul className="right hide-on-med-and-down">
                <li><a>Hello {this.props.currentUser.firstName}</a></li>
                <li><a href="#ok">Home</a></li>
                <li><a href="/#" onClick={this._logoutHandler}>Logout</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <CardView currentArtist={this.props.currentArtist} />
        </div>
      </div>
    );
  }
});



// let musicShitString = ''
// console.log(musicShitString);
 // console.log(this.props.currentArtist)


const CardView = React.createClass({


  render: function(){

    return (
        <div className="col xs12 s12 m4 lg3">
          <div className="card z-depth-4">
            <div className="card-content black-text">
              <div className="card-image">
                <img src="https://unsplash.it/300/300/?random"></img>
              </div>
              <span className="card-title">{this.props.bandname}</span>
              <h6>{this.props.artistname}</h6>
              <h6>{this.props.datetime}</h6>
            </div>
            <div className="cta">
              <iframe src={this.props.currentArtist} frameBorder="0" allowTransparency="true"></iframe>
              <a href="#bandinfo" className="center view-full-band">view full playlist</a>
            </div>
          </div>
        </div>
    );
  }
});
module.exports = MainView, CardView
