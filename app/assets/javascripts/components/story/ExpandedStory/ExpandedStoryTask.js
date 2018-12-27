import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpandedStoryTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(e) {
    this.setState({
      task: e.target.value
    })
  }
  render(){
    return (
      <div className="task_form clearfix">
        <label htmlFor="tasks">{I18n.t('story.tasks')}</label>
        <input
          value={this.state.task}
          className="form-control input-sm"
          onChange={this.onInputChange}
        />
        <button
          type='submit'
          className={`add-task btn btn-default btn-xs ${'' ? 'icons-throbber saving' : ''}`}
          disabled=''
          onClick={() => this.props.onSave({ name: this.state.task })}
        >
          {I18n.t('add task')}
        </button>
      </div>
    );
  }
};

export default ExpandedStoryTask
