const Backbone = require('backbone');
const STORE = require('./store.js');

const UserModel = require('./model-user.js').UserModel

const ACTIONS = {
      _signUpUser: function(newUserObj){
            console.log(newUserObj)
           let userMod = new UserModel("/sign-up")
           userMod.set(newUserObj)
           console.log(userMod)

         userMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = ""
         })
      },

      _signInUser: function(userObj){
            console.log(userObj)
           let userMod = new UserModel("/sign-in")
           userMod.set(userObj)
           console.log(userMod)

         userMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = "home"
         })
      },

      _captureLocation: function(locationObj){
         console.log(locationObj)
         let locationMod = new UserModel("/location")
         locationMod.set(locationObj)

         locationMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = "home"
         })
      },

      _getUser: function(queryObj){
         const authenticateUser = new UserModel("/get-account")
         authenticateUser.fetch().then(function(serverRes){
            console.log(serverRes)
            // STORE.setStore('currentTodos', todoColl.models )
         })

      }

}

module.exports = ACTIONS
