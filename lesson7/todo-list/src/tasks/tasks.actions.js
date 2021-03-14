import { tasksListSelector } from './tasks.selectors';
import * as tasksGateway from './tasksGateway';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListReceived = tasksList => ({
   type: TASKS_LIST_RECIEVED,
   payload: { tasksList },
});

export const getTasksList = () => dispatch => {
   tasksGateway.fetchTasksList().then(tasksList => dispatch(tasksListReceived(tasksList)));
};

export const updateTask = taskId => (dispatch, getState) => {
   const state = getState();
   const tasksList = tasksListSelector(state);
   const task = tasksList.find(task => task.id === taskId);
   const updatedTask = {
      ...task,
      done: !task.done,
   };

   tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
};

export const deleteTask = taskId => dispatch => {
   tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
};

export const createTask = text => dispatch => {
   const taskData = {
      text,
      done: false,
   };

   tasksGateway.createTask(taskData).then(() => dispatch(getTasksList()));
};
