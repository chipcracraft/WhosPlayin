const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const {fetchMetroData, fetchMetroConcerts, userMetro, metroConcerts} = require('./node-queries.js')
const {HomeView, CardView } = require('./main-view');
const AppRouter = Backbone.Router.extend({
  routes: {
      "home": "showHomePage",
    "*path" : "showSplashPage",
    "signup": "showSignUpPage"
  },

  showHomePage: function(){
    ReactDOM.render(<HomeView />, document.querySelector("#app-container"));
  },
  showSplashPage: function(){
    ReactDOM.render(<SplashPageView />, document.querySelector("#app-container"));
  },
  showSignUpPage: function(){
    ReactDOM.render(<SignUpView />, document.querySelector('#app-container'));
  },

  initialize: function(){
    Backbone.history.start();
  }
})

new AppRouter()
