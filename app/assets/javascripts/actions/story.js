import actionTypes from './actionTypes';

export const receiveStories = (stories) => ({
  type: actionTypes.RECEIVE_STORIES,
  data: stories
});

export const toggleStory = (id) => ({
  type: actionTypes.TOGGLE_STORY,
  id
});

export const updateStorySuccess = (story) => ({
  type: actionTypes.UPDATE_STORY_SUCCESS,
  story
});

export const updateStory = (story, projectId) => {
  return (dispatch, getState, { Story }) => {
    if (story._editing._isDirty) {
      return Story.update(story._editing, projectId)
        .then(( story ) => {
          dispatch(updateStorySuccess(story));
          dispatch(toggleStory(story.id));
        });
    }
    return dispatch(toggleStory(story.id));
  };
};

export const editStory = (id, newAttributes) => ({
  type: actionTypes.EDIT_STORY,
  id,
  newAttributes
});

export const addTask = (project, story, newAttributes) => {
  console.log(`project: ${project} \n story: ${story} \n newAttributes: ${newAttributes}`)
  return (dispatch, getState, { Story }) => {
    return Story.newTask(project, story, newAttributes)
      // .then((task) => {
      //   dispatch(taskAdd(task));
      // });
  };
};

export const taskAdd = (task) => ({
  type: actionTypes.ADD_TASK,
  task
});
