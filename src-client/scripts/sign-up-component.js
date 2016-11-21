const React = require('react')
const ReactDOM = require('react-dom')

// const ACTIONS = require('./actions.js')

const SignUpView = React.createClass({
      _handleSignIn: function(evt){
         evt.preventDefault()

         let userObj = {
            name: evt.target.username.value,
            password: evt.target.password.value
         }

         console.log(userObj)
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

         console.log(newUserObj)
      },

     render: function(){
         return (
               <div className="container text-left login-page">
                 <div className="row">
                   <div className="column left-column col-xs-12 col-sm-6">
                    <form className="sign-in" onSubmit={this._handleSignIn}>
                       <h3>Sign In</h3>
                         <input type="text" className="form-control" placeholder="Email Address" name="username"/>
                           <br></br>
                         <input type="text" className="form-control" placeholder="Password" name="password"/>
                           <br></br>
                           <i className="fa fa-spotify" aria-hidden="true"></i>
                           <i className="fa fa-facebook-square" aria-hidden="true"></i>

                         <button className="text-center" type="submit">Sign In</button>
                    </form>
                  </div>


                 <div className="column right-column col-xs-12 col-sm-6">
                 <form className="sign-up" onSubmit={this._handleSignUp}>
                   <h3>Sign Up</h3>
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
                   <button className="text-center" type="submit">Sign Up</button>
                 </form>
                 </div>
               </div>
             </div>
         )
     }

})
module.exports = SignUpView
