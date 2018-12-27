import React from 'react';
import PropTypes from 'prop-types';
import ExpandedStoryHistoryLocation from './ExpandedStoryHistoryLocation';
import ExpandedStoryControls from './ExpandedStoryControls';
import ExpandedStoryEstimate from './ExpandedStoryEstimate';
import ExpandedStoryType from './ExpandedStoryType';
import ExpandedStoryDescription from './ExpandedStoryDescription';
import ExpandedStoryTask from './ExpandedStoryTask';
import { editStory, updateStory, addTask } from '../../../actions/story';
import { connect } from 'react-redux';

export const ExpandedStory = (props) => {
  const { story, onToggle, editStory, updateStory, project, addTask } = props;

  return (
    <div className="Story Story--expanded">
      <ExpandedStoryControls
        onCancel={onToggle}
        onSave={() => updateStory(story, project.id)}
      />

      <ExpandedStoryHistoryLocation story={story} />
      <div className="Story__flex">
        <ExpandedStoryEstimate story={story}
          onEdit={(newAttributes) => editStory(story.id, newAttributes)}
        />

        <ExpandedStoryType story={story}
          onEdit={(newAttributes) => editStory(story.id, newAttributes)}
        />
      </div>

      <ExpandedStoryDescription
        story={story}
        onEdit={(newAttributes) => editStory(story.id, newAttributes)}
      />

      <ExpandedStoryTask
        onSave={(newAttributes) => addTask(project.id, story.id, newAttributes)}
      />
    </div>
  );
};

ExpandedStory.propTypes = {
  story: PropTypes.object.isRequired
};

const mapStateToProps = ({ project }) => ({ project });

export default connect(
  mapStateToProps,
  {
    editStory,
    updateStory,
    addTask
  }
)(ExpandedStory);
