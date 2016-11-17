import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

const HomeView = React.createClass({
  render: function(){
    return (
             <div className="main-container">
               <i className="fa fa-bars fa-6x hamburger" aria-hidden="true"></i>
               <div className="row">
                 <CardView />
               </div>
               <a href="/login"/>
             </div>
           )
  }
});

const CardView = React.createClass({
  render: function(){
    return (
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is another link</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = {HomeView, CardView}
