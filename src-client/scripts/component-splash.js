const React = require('react')

const ACTIONS = require('./actions.js')

const SplashPageView = React.createClass({
   _handleClick: function(){
      console.log("listen to shit")
   },

   _signUp: function(){
      window.location.hash="signup"
   },

   render: function(){
      return (
      <div className="splash-container">

      <div className="splash-title">
         <h2>WHOSPLAYIN</h2>
      </div>
      <div className="splash-login" onClick={this._signUp}>
         <h2>SIGN UP</h2>
      </div>

         <div className="splash-top">
            <h1>Find Bands Playing Near You!</h1>
            <div onClick={this._handleClick} className="listen-button">Listen</div>
         </div>

         <div className="splash-bottom">

         </div>

      </div>
   )
   }
})

module.exports = SplashPageView
