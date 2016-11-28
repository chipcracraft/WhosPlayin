const React = require('react')

const ACTIONS = require('./actions.js')


const SplashPageView = React.createClass({
   componentWillMount: function(){
   },

   _handleSubmit: function(evt){
      evt.preventDefault()

      const locationObj = evt.target.location.value

      console.log(locationObj)
      ACTIONS._captureLocation(locationObj)

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

         <form className="form-group splash-top" onSubmit={this._handleSubmit}>
            <h1>Find Bands Playing Near You!</h1>
               <input type="text" className="form-control location-input" placeholder="Location" name="location"/>
               <button type ="submit" className="center listen-button btn waves-effect waves-light"><a>Listen</a></button>

         </form>

         <div className="splash-bottom">

         </div>

      </div>
   )
   }
})

module.exports = SplashPageView
