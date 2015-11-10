'use strict';

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback) {
      if (!confirm('u sure?')) {
        transition.about();
      } else {
        callback();
      }
    },

    willTransitionFrom: function(transition, component) {
      if (!confirm('u sure you want to leave?')) {
        transition.about();
      }
    }
  },

  render: function(){
    return (
      <div>
        <h1>About</h1>
        <p>Bla bla!</p>
        <ul>
          <li>b</li>
          <li>l</li>
          <li>a</li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
