'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var NotFoundPage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Get out.</p>
        <p><Link to='app'>Go back to mummy</Link></p>
      </div>
    );
  }

});

module.exports = NotFoundPage;
