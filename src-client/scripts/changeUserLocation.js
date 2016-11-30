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


// NEW BUTTON IN MAIN NAVBAR & CLICKHANDLER

<li onClick={this._changeLocationClickHandler}><a>Change Location</a></li>


_changeLocationClickHandler = function(){
   evt.preventDefault()

   
},
