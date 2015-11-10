'use strict';

var React = require('react');

var Select = React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    textMethod: React.PropTypes.func.isRequired,
    value: React.PropTypes.string,
    error: React.PropTypes.string
  },

  render: function() {
    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }

    var textMethod = this.props.textMethod;
    var options = this.props.options.map(function(option) {
      return <option key={option.id}>{textMethod(option)}</option>;
    });

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <br/>
        <div className='field'>
          <select value={this.props.value} name={this.props.name} onChange={this.props.onChange} className='form-control'>
            { options }
          </select>
          <div className='input'>{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = Select;
