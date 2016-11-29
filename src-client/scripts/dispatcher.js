const React = require('react');
const STORE = require('./store.js');
const ACTIONS = require('./actions.js');

const MainView = require('./new-main.js');
const BandView = require('./band-view.js');
const SplashPageView = require('./component-splash.js');
const SignUpView = require('./sign-up-component.js')


const Dispatcher = React.createClass({
        getInitialState: function(){
          STORE.setStore('currentSongs', [])

          let startingState = STORE.getStoreData()
          return startingState
        },

        componentWillMount: function(){
                let self = this
                  STORE.onChange(function(){
                let updateState = STORE.getStoreData()
                  self.setState(updateState)
              })
        },

         render: function(){
               switch (this.props.routedFrom){
                  case "SplashPageView":
                     return <SplashPageView/>
                     break;

                  case "MainView":
                     return <MainView currentUser={this.state.currentUser}/>
                     break;

                  case "SignUpView":
                     return <SignUpView/>
                     break;

                  case "BandView":
                     return <BandView/>
                     break;
               }
            }
})

module.exports = Dispatcher
