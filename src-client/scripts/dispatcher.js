const React = require('react');
const STORE = require('./store.js');
const ACTIONS = require('./actions.js');

const MainView = require('./main-view.js');
const BandView = require('./band-view.js');
const SignUpView = require('./sign-up-component.js')


const Dispatcher = React.createClass({
        getInitialState: function(){
          STORE.setStore('currentSongs', [])

          let startingState = STORE.getStoreData()
          return startingState;
        },

        componentWillMount: function(){
                let self = this;
                  STORE.onChange(function(){
                let updateState = STORE.getStoreData()
                  self.setState(updateState);
              })
        },

componentWillMount: function(){
        let self = this;
          STORE.onChange(function(){
        let updateState = STORE.getStoreData()
          self.setState(updateState);
      })
},

render: function(){
      switch (this.props.routedFrom) {
        case "splashPage":
              return <SignUpView/>
          break;

        case "homePage":
            return <HomeView signInData={this.state.signInData}/>
            break;


        case "signUpView":
              return <SplashPageView/>
              break;

        case "bandView":
            return <BandView/>
            break;
      }

module.exports = Dispatcher



}
        render: function(){
              switch (this.props.routedFrom) {
                case "splashPage":
                      return <SignUpView/>
                  break;

              }

        }

})
