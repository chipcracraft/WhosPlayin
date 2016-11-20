const React = require('react')
const ReactDOM = require('react-dom')

const SignUpView = React.createClass({

        render: function(){
            return (
                  <div className="container text-left login-page">
                    <div className="row">
                      <div className="column left-column col-xs-12 col-sm-6">
                       <form action="" className="sign-in">
                          <h3>Sign In</h3>
                            <input type="text" className="form-control" placeholder="Email Address"/>
                              <br></br>
                            <input type="text" className="form-control" placeholder="Password"/>
                              <br></br>
                              <i class="fa fa-spotify" aria-hidden="true"></i>
                              <i class="fa fa-facebook-square" aria-hidden="true"></i>

                            <button className="text-center">Sign In</button>
                       </form>
                     </div>


                    <div className="column right-column col-xs-12 col-sm-6">
                    <form action="" className="sign-up">
                      <h3>Sign Up</h3>
                        <input type="text" className="form-control" placeholder="First Name"/>
                      <br></br>
                        <input type="text" className="form-control" placeholder="Last Name"/>
                      <br></br>
                        <input type="text" className="form-control" placeholder="Email"/>
                          <br></br>
                        <input type="text" className="form-control" placeholder="Password"/>
                          <br></br>
                      <button className="text-center">Sign Up</button>
                    </form>
                    </div>
                  </div>
                </div>
            )
        }
})
module.exports {SignUpView}
