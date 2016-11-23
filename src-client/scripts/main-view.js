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
  overflow: 'auto',
  paddingBottom: '180px',
}

const hamburgerStyle = {
  color: '#f5f5f5',
  position: 'fixed',
  right: 10,
  top: 10,
}

// const schema = {
//   bandName: wow,
//   trackName: wow,
//   dateTime: wow,

//   bandName:
//   trackName:
//   dateTime:
//   trackSet:
//   /*trackset is for a spotify playlist populated
//   by unique trackIDs separated by semicolons*/
// }

const HomeView = React.createClass({
  render: function(){
    return (
            <div className="main-container" style={mainStyle}>
              <a href="/login">log in</a>
              {/* <Login /> */}
              {/* <i className="fa fa-bars fa-4x hamburger" aria-hidden="true" style={hamburgerStyle}></i> */}
              <div className="row center">
                <CardView />
              </div>
              <footer className="page-footer">
                <div className="row">
                  <div className="col l4 s12">
                    <div className="container">
                      <div className="controls">
                        <div className="container">
                          <a className="grey-text text-lighten-4 left" href="#play"><i className="fa fa-play-circle fa-4x" aria-hidden="true"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col l4 s12">
                    <h1 className="white-text">wow a progress bar here</h1>
                  </div>
                  <div className="col l4 s12">
                    <ul>
                      <li><a className="grey-text text-lighten-3 right" href="#!">{this.props.bandname}</a></li>
                      <br></br>
                      <li><a className="grey-text text-lighten-3 right" href="#!">{this.props.artistname}</a></li>
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
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content black-text">
              <div className="card-image">
                <img src="https://unsplash.it/200/?random"></img>
              </div>
              <span className="card-title">{this.props.bandname}</span>
              <h6>{this.props.artistname}</h6>
              <h6>{this.props.datetime}</h6>
            </div>
            <div className="cta">
              <iframe src="https://embed.spotify.com/?uri=spotify:trackset:WOWTESTTESTTEST:4uLU6hMCjMI75M1A2tKUQC,3LX0Qc1iKkqLZP0FijjLmI,1x6ACsKV4UdWS2FMuPFUiT,4bi73jCM02fMpkI11Lqmfe" frameBorder="0" allowTransparency="true"></iframe>
              <a href="/band-view">view full playlist</a>
            </div>
          </div>
        </div>
    );
  }
});
// let muiName = ''
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

// export default AppBarExampleComposition;
module.exports = {HomeView, CardView}
