const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const {fetchMetroData, fetchMetroConcerts, userMetro, metroConcerts} = require('./node-queries.js')
const {HomeView, CardView } = require('./main-view');
const SignUpView = require('./sign-up-component.js');
const SplashPageView = require('./component-splash.js');
const BandView = require('./band-view.js');
const MainView = require('./new-main.js');

const AppRouter = Backbone.Router.extend({
  routes: {
    "bandinfo" : "showBandPage",
    "home" : "showHomePage",
    "signup": "showSignUpPage",
    "*path": "showSplashPage"

  },

  showHomePage: function(){
    ReactDOM.render(<MainView />, document.querySelector("#app-container"));
  },
  showSplashPage: function(){
    ReactDOM.render(<SplashPageView />, document.querySelector("#app-container"));
  },
  showSignUpPage: function(){
    ReactDOM.render(<SignUpView />, document.querySelector('#app-container'));
  },

  showBandPage: function(){
    ReactDOM.render(<BandView/>, document.querySelector('#app-container'));
  },

  initialize: function(){
    Backbone.history.start();
  }
})

new AppRouter()
