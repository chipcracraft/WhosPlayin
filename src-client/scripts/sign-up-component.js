const React = require('react')
const ReactDOM = require('react-dom')

const ACTIONS = require('./actions.js')

const SignUpView = React.createClass({
      getInitialState: function() {
         return {
             signInData: []
         };
      },

      _handleSignIn: function(evt){
         evt.preventDefault()

         let userObj = {
            username: evt.target.username.value,
            password: evt.target.password.value
         }

         ACTIONS._signInUser(userObj)
      },

      _handleSignUp: function(evt){
         evt.preventDefault()

         let newUserObj = {
            firstName: evt.target.firstName.value,
            lastName: evt.target.lastName.value,
            email: evt.target.email.value,
            username: evt.target.username.value,
            password: evt.target.password.value
         }

         ACTIONS._signUpUser(newUserObj)
      },

     render: function(){
         return (
               <div className="container login-page">
                 <div className="row">
                   <div className="column left-column col-xs-12 col-sm-6">
                     <form className="sign-in" onSubmit={this._handleSignIn}>
                       <h1 className="center">Sign In</h1>
                       <input type="text" className="form-control" placeholder="Username" name="username"/>
                       <br></br>
                       <input type="text" className="form-control" placeholder="Password" name="password"/>
                       <br></br>
                       <button className="center btn waves-effect waves-light" type="submit">Sign In</button>
                       <br></br>
                       <i className="fa fa-4x fa-spotify center" aria-hidden="true"></i>
                       <i className="fa fa-4x fa-facebook-square center" aria-hidden="true"></i>
                     </form>
                   </div>


                   <div className="column right-column col-xs-12 col-sm-6">
                     <form className="sign-up" onSubmit={this._handleSignUp}>
                       <h1 className ="center">Sign Up</h1>
                       <input type="text" className="form-control" placeholder="First Name" name="firstName"/>
                       <br></br>
                       <input type="text" className="form-control" placeholder="Last Name" name="lastName"/>
                       <br></br>
                       <input type="text" className="form-control" placeholder="Email" name="email"/>
                       <br></br>
                       <input type="text" className="form-control" placeholder="Username" name="username"/>
                       <br></br>
                       <input type="text" className="form-control" placeholder="Password" name="password"/>
                       <br></br>
                       <button className="center btn waves-effect waves-light" type="submit">Sign Up</button>
                 </form>
                 </div>
               </div>
             </div>
         )
     }

})
module.exports = SignUpView
