'use strict';

var React = require('react');
var Link = require('react-router').Link;
var CoursesList = require('./coursesList');
var CourseStore = require('../../stores/courseStore');


var PropTypes = React.PropTypes;

var CoursesPage = React.createClass({

  getInitialState: function() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },

  componentDidMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },

  componentDidUnmount: function() {
    CourseStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      courses: CourseStore.getAllCourses()
    });
  },

  render: function() {
    return (
      <div>
        <h1>Courses</h1>
        <Link to='addCourse' className='btn btn-default'>Add course</Link>
        <CoursesList courses={this.state.courses} />
      </div>
    );
  }

});

module.exports = CoursesPage;
