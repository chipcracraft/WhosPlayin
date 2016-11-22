const Backbone = require('backbone');
const STORE = require('./store.js');

const UserModel = require('./model-user.js').UserModel

const ACTIONS = {
      _signUpUser: function(newUserObj){
            console.log(newUserObj)
           let userMod = new UserModel("up")
           userMod.set(newUserObj)
           console.log(userMod)

         userMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = ""
         })
      },

      _signInUser: function(userObj){
            console.log(userObj)
           let userMod = new UserModel("in")
           userMod.set(userObj)
           console.log(userMod)

         userMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = ""
         })
      }

      // fetchSignInData: function(userObj){
      //     let userMod = new UserModel("in")
      //         userMod.fetch().then(function(){
      //           STORE.setStore('signInData', userMod)
      //           window.location.hash=""
      //         })
      // }

}

module.exports = ACTIONS
