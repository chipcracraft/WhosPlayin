const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const {HomeView, CardView } = require('./main-view');
const SignUpView = require('./sign-up-component.js');
const SplashPageView = require('./component-splash.js');


const AppRouter = Backbone.Router.extend({
  routes: {
    "home" : "showHomePage",
    "signup": "showSignUpPage",
    "*path": "showSplashPage"

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
