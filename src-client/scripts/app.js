const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const {HomeView, CardView } = require('./main-view');
document.querySelector('#app-container').innerHTML = `<h1>Yah okay</h1>`

const AppRouter = Backbone.Router.extend({
  routes: {
    "*path"  : "showHomePage",
    "/splash": "showSplashPage"
  },

  _showHomePage: function(){
    ReactDOM.render(<HomeView />, document.querySelector("#app-container"));
  },

  _showSplashPage: function(){
    console.log("haha jk we haven't wired this up yet!")
  },

  initialize: function(){
    Backbone.history.start();
  }
})

const app = new AppRouter;
