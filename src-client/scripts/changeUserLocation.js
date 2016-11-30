import React from 'react'
import ReactDOM from 'react-dom'

const STORE = require('./store.js')
const ACTIONS = require('./actions.js')


// NEW ACTION

_changeUserLocation: function(userNewLocationObj){
     let userNewLocationMod = new UserModel("/edit-account")
     userNewLocationMod.set(userNewLocationObj)

   userNewLocationMod.save().then(function(serverRes){
      STORE.setStore('currentUser', serverRes)
      window.location.hash = "home"
   })
},


// NEW BUTTON IN MAIN  & CLICKHANDLER

<form className="sign-in" onSubmit={this._changeLocationSubmitHandler}>
   <input type="text" value="Location" name="city"></input>
   <button type="submit" className="center location-btn btn waves-effect waves-light">Change Location</button>
</form>



_changeLocationSubmitHandler = function(){
   evt.preventDefault()

   let userNewLocationObj = {
      city: evt.target.city.value,
   }

   ACTIONS._changeUserLocation(userNewLocationObj)
},
