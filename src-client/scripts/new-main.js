import React from 'react'
import ReactDOM from 'react-dom'
import {fetchBackEnd,
        fetchArtists,
        fetchTopTracks } from './test.js'


const ACTIONS = require('./actions.js')


const MainView = React.createClass({
  componentWillMount: function() {
    let locationDataReq = fetchBackEnd('Asheville')
    locationDataReq.then(function(res){
      console.log('res', res);

      let artistListReq = fetchArtists();
      artistListReq.then(function(res){
        console.log('res2', res);

      })
    })
    // let eventsListNames = performance[0]
    // console.log(eventsListNames);

  },

  _logoutHandler: function(){
    ACTIONS._signOutUser()
  },

  render: function(){
     console.log(this.props.currentUser)
    return (
      <div className="wrapper">
        <div className="hero">
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li className="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
          <nav>
            <div className="nav-wrapper">
              <a href="#!" className="brand-logo center">whosplayin</a>
              <ul className="right hide-on-med-and-down">

                <li><a>Hello {this.props.currentUser.firstName}</a></li>
                <li><a href="/#" onClick={this._logoutHandler}>Logout</a></li>
                <li><a href="#ok">home</a></li>
                <li><a className="dropdown-button" data-activates="dropdown1">Dropdown<i className="fa fa-chevron-down" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <CardView />
          <CardView />
          <CardView />
          <CardView />

        </div>
      </div>
    );
  }
});
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
              {/* <iframe src="https://embed.spotify.com/?uri=spotify:playlist:788MOXyTfcUb1tdw4oC7KJ" width="300" height="380" frameborder="0" allowtransparency="true"></iframe> */}
              <iframe src="https://embed.spotify.com/?uri=spotify:trackset:zombyisadouche:51265tsBntG5gAcOBMvBeD,4uLU6hMCjMI75M1A2tKUQC,3LX0Qc1iKkqLZP0FijjLmI,1x6ACsKV4UdWS2FMuPFUiT,4bi73jCM02fMpkI11Lqmfe" frameBorder="0" allowTransparency="true"></iframe>
              <a href="#bandinfo" className="center view-full-band">view full playlist</a>
            </div>
          </div>
        </div>
    );
  }
});
module.exports = MainView
