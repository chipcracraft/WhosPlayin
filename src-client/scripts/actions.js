const Backbone = require('backbone');
const STORE = require('./stores.js');

const UserModel = require('./model-user.js')

const ACTIONS = {
      // authenticateUser: function(userDataObj){
      //       console.log(userDataObj)
      //      let userMod = new UserModel()
      //      userMod.set(userDataObj)
      //      console.log(userMod)
      //
      //    userMod.save().then(function(serverRes){
      //       console.log(serverRes)
      //       window.location.hash = ""
      //    })
      // },
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
