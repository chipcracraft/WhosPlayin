import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
// import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';

const mainStyle = {
  background: '#222',
}
const hamburgerStyle = {
  color: '#f5f5f5',
  position: 'fixed',
  right: 10,
  top: 10
}
const HomeView = React.createClass({
  render: function(){
    return (
            <div className="main-container" style={mainStyle}>
              <a href="/login">log in</a>
              <i className="fa fa-bars fa-4x hamburger" aria-hidden="true" style={hamburgerStyle}></i>
              <div className="row">
                <CardView />
              </div>
              <footer className="page-footer">
                <div className="row">
                  <div className="col l1 s1">
                    <div className="container">
                      <div className="controls">
                        <div className="container">
                          <a className="grey-text text-lighten-4 left" href="#play"><i className="fa fa-play-circle fa-4x" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 s8">
                    <h6 className="white-text">wow a progress should go here</h6>
                  </div>
                  <div className="col l4 s10">
                    <ul>
                      <li><a className="grey-text text-lighten-3 right" href="#!">The Band </a></li>
                      <br></br>
                      <li><a className="grey-text text-lighten-3 right" href="#!">The Song</a></li>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
           )
  }
});

const CardView = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col s12 m4">
          <div className="card z-depth-5">
            <div className="card-content black-text">
              <div className="card-image">
                <img src="https://unsplash.it/275/?random"></img>

              </div>
              <span className="card-title">artist name</span>
              <p>Maybe artist info/ date & time info should go here</p>
            </div>
            <div className="card-action">
              <a href="/play">listen now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

// class Login extends Component {
//   static muiName = 'FlatButton';
//
//   render: function(){
//     return (
//       <FlatButton {...this.props} label="Login" />
//     );
//   }
// }
//
// const Logged = (props) => (
//   <IconMenu
//     {...props}
//     iconButtonElement={
//       <IconButton><MoreVertIcon /></IconButton>
//     }
//     targetOrigin={{horizontal: 'right', vertical: 'top'}}
//     anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//   >
//     <MenuItem primaryText="Refresh" />
//     <MenuItem primaryText="Help" />
//     <MenuItem primaryText="Sign out" />
//   </IconMenu>
// );
//
// Logged.muiName = 'IconMenu';
//
// /**
//  * This example is taking advantage of the composability of the `AppBar`
//  * to render different components depending on the application state.
//  */
//
// class AppBarExampleComposition extends Component {
//   state = {
//     logged: true,
//   };
//
//   handleChange = (event, logged) => {
//     this.setState({logged: logged});
//   };
//
//   render() {
//     return (
//       <div>
//         <Toggle
//           label="Logged"
//           defaultToggled={true}
//           onToggle={this.handleChange}
//           labelPosition="right"
//           style={{margin: 20}}
//         />
//         <AppBar
//           title="Title"
//           iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//           iconElementRight={this.state.logged ? <Logged /> : <Login />}
//         />
//       </div>
//     );
//   }
// }
//
// export default AppBarExampleComposition;
module.exports = {HomeView, CardView}
