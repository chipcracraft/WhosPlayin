const Backbone = require('backbone');

const UserModel = Backbone.Model.extend({
   url:"",

   initialize: function(str){
      this.url = "/sign-" + str
   }
})

module.exports = {
   UserModel
}
