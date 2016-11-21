const Backbone = require('backbone');

const SignInModel = Backbone.Model.extend({
      url:"/sign-in",
      initialize: function(){

      }
})

const SignUpModel = Backbone.Model.extend({
   url:"/sign-up",

   initialize: function(){

   }
})

module.exports = {
   SignInModel,
   SignUpModel
}
