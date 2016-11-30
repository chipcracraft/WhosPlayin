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

  _changeLocationSubmitHandler: function(){
     evt.preventDefault()

     let userNewLocationObj = {
        city: evt.target.city.value,
     }

     ACTIONS._changeUserLocation(userNewLocationObj)
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
               <form className="row change-location left" onSubmit={this._changeLocationSubmitHandler}>
                  <input className="col-sm-6" type="text" name="city"></input>
                  <button type="submit" className="col-sm-6 center location-btn btn waves-effect waves-light">Change Location</button>
               </form>
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
        this.props.cardView
    );
  }
});
module.exports = MainView, CardView, cardViewConstructor
