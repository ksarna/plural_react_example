'use strict';

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./CourseForm');
var PropTypes = React.PropTypes;
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var toastr = require('toastr');
var _ = require('lodash');


var ManageCoursePage = React.createClass({

  mixins: [
    Router.Navigation
  ],

  componentWillMount: function() {
    // sets state before rendering occurs. Does not cause re-render
    var courseId = this.props.params.id;

    if (courseId) {
      this.setState({course: CourseStore.getCourseById(courseId)});
    }
  },


  getInitialState: function(){
    return {
      course: { id: null, title: '', watchHref: '', author: {id: '', name: ''}, length: '', category: ''},
      errors: {},
      dirty: false
    };
  },

  formIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};
    var that = this;
    
    _.map(['title', 'watchHref'], function(el){
      if (that.state.course[el].length < 3){
        that.state.errors[el] = 'Must be at least 3 chars';
        formIsValid = false;
      }
    });

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  updateState: function(event){
    this.setState({dirty: true});
    var fieldName = event.target.name;
    var value = event.target.value;
    _.set(this.state.course, fieldName, value);
    return this.setState({course: this.state.course});
  },


  save: function(event) {
    event.preventDefault();
    if(!this.formIsValid()){
      return;
    }

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }

    this.setState({dirty: false});
    toastr.success('Course saved.');
    this.transitionTo('courses');
  },

  render: function() {
    return (
      <CourseForm
        course={this.state.course}
        onChange={this.updateState}
        onSave={this.save}
        errors={this.state.errors} />
    );
  }

});

module.exports = ManageCoursePage;
