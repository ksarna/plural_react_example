'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/courseApi');
var ActionTypes = require('../constants/actionTypes');

var CourseActions = {
  createCourse: function(course){
    var savedCourse = CourseApi.saveCourse(course);

    // Hey dispatcher, go tell all the stores that an course was just created
    Dispatcher.dispatch({
      actionType: ActionTypes.CREATE_COURSE,
      course: savedCourse
    });
  },

  updateCourse: function(course){
    var savedCourse = CourseApi.saveCourse(course);

    Dispatcher.dispatch({
      actionType: ActionTypes.UPDATE_COURSE,
      course: savedCourse
    });
  },

  deleteCourse: function(id) {
    CourseApi.deleteCourse(id);
    // Hey dispatcher, go tell all the stores that an course was just deleted
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_COURSE,
      id: id
    });
  }
};


module.exports = CourseActions;
