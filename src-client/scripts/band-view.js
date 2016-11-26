const React = require('react')
const ReactDOM = require('react-dom')


const BandView = React.createClass ({

      _bandInfo: function(){
          window.location.hash='#bandinfo'
      },

          render: function(){
              return (
                  <div className="container band-info">
                    <h1 className="band-title">Interpol <span>Turn On The Bright Lights</span></h1>
                    <div className="row">
                      <div className="left-column col-xs-12 col-sm-6">
                        <div className="band-image">
                          <img className ="band-img" src="https://lastfm-img2.akamaized.net/i/u/ar0/55292eb15e7e442a9f40f09625d6e111"/>
                          <p className="band-descript">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>
                      </div>
                      <div className="right-column col-xs-12 col-sm-6">
                        <iframe src="https://embed.spotify.com/?uri=spotify:user:erebore:playlist:788MOXyTfcUb1tdw4oC7KJ&theme=white" width="500" height="640" frameborder="0" allowtransparency="true"></iframe>
                      </div>

                    </div>
                  </div>
              )
          }



})
module.exports = BandView
