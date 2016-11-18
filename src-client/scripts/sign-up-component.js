const React = require('react')
const ReactDOM = require('react-dom')


const SignUpView = React.createClass({

        render: function(){
            return (
                  <div className="login-page">
                    <div>
                      <form action="" className="sign-in">
                          <h1>Sign In</h1>
                          <input type="Email Address"/>
                          <input type="Password"/>
                          <button>Sign In</button>
                      </form>
                    </div>
                    <form action="" className="sign-up">
                        <h1>Sign Up</h1>
                        <input type="First Name"/>
                        <input type="Last Name"/>
                        <input type="Email"/>
                        <input type="Password"/>
                        <button>Sing Up</button>
                    </form>
                  </div>

            )
        }
})
module.exports {SignUpView}
