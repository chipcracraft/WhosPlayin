const Backbone = require('backbone');
const STORE = require('./stores.js');

const {SignUpModel, SignInModel} = require('./model-user.js')

const ACTIONS = {
      _signUpUser: function(newUserObj){
            console.log(newUserObj)
           let userMod = new SignUpModel()
           userMod.set(newUserObj)
           console.log(userMod)

         userMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = "bananas"
         })
      },

      _signInUser: function(newUserObj){
            console.log(newUserObj)
           let userMod = new SignInModel()
           userMod.set(newUserObj)
           console.log(userMod)

         userMod.save().then(function(serverRes){
            console.log(serverRes)
            window.location.hash = ""
         })
      }
      //
      // fetchSignInData: function(userDataObj){
      //     let userSignInInstance = new UserCollection()
      //         userSignInInstance.fetch().then(function(){
      //           STORE.setStore('signInData', userSignInInstance)
      //
      //         })
      // },

}

module.exports = ACTIONS
