const React = require('react')
const ReactDOM = require('react-dom')


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
               <div className="login-page">
                 <div>
                   <form action="" className="sign-in" onSubmit={this._handleSignIn}>
                       <h2>Sign In</h2>
                       <input type="text" name="username"/>
                       <input type="Password" name="password"/>
                       <input type="submit" value="Sign In" />
                   </form>
                 </div>
                 <form action="" className="sign-up" onSubmit={this._handleSignUp}>
                     <h2>Sign Up</h2>
                     <input type="First Name" name="firstName"/>
                     <input type="Last Name" name="lastName"/>
                     <input type="Email" name="email"/>
                     <input type="username" name="username"/>
                     <input type="Password" name="password"/>
                     <input type="submit" value="Sign Up" />
                 </form>
               </div>

                 )
       }
})

ReactDOM.render(<SignUpView/>, document.querySelector('#app-container'))

module.exports=SignUpView
