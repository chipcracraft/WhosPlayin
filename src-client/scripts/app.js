const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

const SplashPageView = require('./component-splash.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    "" : "renderSplashPageView"
  },

  renderSplashPageView: function(){
     ReactDOM.render(<SplashPageView/> ,document.querySelector('#app-container'))
  },

  initialize: function(){
     Backbone.history.start();
  }

})

new AppRouter()
