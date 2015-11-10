'use strict';

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;


var routes = (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name='authors' handler={require('./components/authors/authorPage')}/>
    <Route name='addAuthor' path='author' handler={require('./components/authors/manageAuthorPage')}/>
    <Route name='manageAuthor' path='author/:id' handler={require('./components/authors/manageAuthorPage')}/>
    <Route name='about' handler={require('./components/about/aboutPage')}/>

    <Route name='courses' handler={require('./components/courses/coursesPage')} />
    <Route name='addCourse' handler={require('./components/courses/manageCoursePage')} />
    <Route name='manageCourse' path='courses/:id' handler={require('./components/courses/manageCoursePage')}/>



    <NotFoundRoute handler={require('./components/common/notFoundPage')}/>
    <Redirect from='about-us' to='about'/>
    <Redirect from='about/*' to='about'/>

  </Route>
);

module.exports = routes;