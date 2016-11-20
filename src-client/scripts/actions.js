const Backbone = require('backbone');
const STORE = require('./store.js');

const ACTIONS = {
      fetchSignInData: function(userDataObj){
          let userSignInInstance = new UserCollection()
              userSignInInstance.fetch().then(function(){
                STORE.setStore('signInData', userSignInInstance)

              })
          },

      createNewUser: function(userInfo)

        }
