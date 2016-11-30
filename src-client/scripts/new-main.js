import React from 'react'
import ReactDOM from 'react-dom'


const STORE = require('./store.js')
const ACTIONS = require('./actions.js')



// componentDidMount() {
//     var element = ReactDOM.findDOWNode(this.refs.dropdown)
//     let(element).ready(function(){
//       let('select').material_select();
//     });
// }


const MainView = React.createClass({
  componentWillMount: function() {
    console.log("prop dawgs", this.props);
   //  if(!this.props.currentUser.city){
   //    return(
   //      <p>loadddinnn</p>
   //    )

    // let eventsListNames = performance[0]
    // console.log(eventsListNames);
  },

  _logoutHandler: function(){
    ACTIONS._signOutUser()
  },

  componentWillReceiveProps: function(newProps){
    console.log('new props',newProps)
    if(newProps.currentUser.city !== this.props.currentUser.city){
      ACTIONS._fetchBandsandTrackData(newProps.currentUser.city)
    }
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

                <li><a href="#ok">Hello {this.props.currentUser.city}</a></li>
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
              <script type='text/javascript' src='http://widget.bandsintown.com/javascripts/bit_widget.js'></script>
              <a href="http://www.bandsintown.com/Susto" className="bit-widget-initializer bandsintown" data-artist="Small Black">Susto Tour Dates</a>
            </div>
          </div>
        </div>
    );
  }
});
module.exports = MainView, CardView
