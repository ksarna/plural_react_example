'use strict';

var React = require('react');
var Input = require('../common/textInput');
var AuthorStore = require('../../stores/authorStore');
var Select = require('../common/select');
var _ = require('lodash');

var CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },



  renderAuthorsSelect: function() {
    var options = AuthorStore.getAllAuthors().map(function(author) {
      return <option key={author.id}>{author.firstName} {author.lastName}</option>;
    });

    return (
      <label htmlFor="author_name">Author
        <br/>
        <select value={this.props.course.author.id} name='author.id' onChange={this.props.onChange} className='form-group'>
          { options }
        </select>
      </label>
    );
  },

  render: function() {
    return (
      <div>
        <form>
          <h1>Manage course</h1>
          <Input name='title'
            label='Title'
            value={this.props.course.title}
            onChange={this.props.onChange}
            error={this.props.errors.title} />

          <Select options={AuthorStore.getAllAuthors()}
            name='author.id'
            label='Author'
            value={this.props.course.author.id}
            onChange={this.props.onChange}
            textMethod={function(option) { return option.firstName + ' ' + option.lastName; }} />

          <Input name='category'
            label='Category'
            value={this.props.course.category}
            onChange={this.props.onChange}
            error={this.props.errors.category} />

          <Input name='length'
            label='Length'
            value={this.props.course.length}
            onChange={this.props.onChange}
            error={this.props.errors.length} />

          <input type='submit' value='save' className='btn btn-default' onClick={this.props.onSave} />

        </form>

      </div>
    );
  }
});


module.exports = CourseForm;
