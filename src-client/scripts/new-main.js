import React from 'react'
import ReactDOM from 'react-dom'


// const STORE = require('./store.js')
import ACTIONS from './actions.js'


let bigStr = ''
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

   //  console.log();
   //  let cards = this.props.whatever.map(function(element){
   //
   //    // return <CardView currentArtist={this.props.currentArtist} artistArr={this.props.artistArr} />
   // })
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
          {this.props.artistArr.map(function(obj, i){
             console.log(obj)
             return(
                <div className="col xs12 s12 m4 lg3">
                   <div className="card z-depth-4">
                     <div className="card-content black-text">
                       <div className="card-image">
                         <img src={obj[0].artists.items[0].images[1].url}></img>
                       </div>
                       <span className="card-title"></span>
                          <h2>{obj[0].artists.items[0].name}</h2>
                     </div>
                     <div className="cta">


                     </div>
                   </div>
                </div>
             )
          }) }
        </div>
      </div>
    );
  }
});


module.exports = MainView
