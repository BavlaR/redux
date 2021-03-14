const BaseURL = 'https://6002aea64f17c800175581fe.mockapi.io/api/v1/tasks';

export const createTask = taskData => {
   return fetch(BaseURL, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
   }).then(response => {
      if (!response.ok) {
         throw new Error('Failed to create task');
      }
   });
};

export const fetchTasksList = () => {
   return fetch(BaseURL).then(res => {
      if (res.ok) {
         return res.json();
      }
   });
};

export const updateTask = (taskId, taskData) => {
   return fetch(`${BaseURL}/${taskId}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
   }).then(response => {
      if (!response.ok) {
         throw new Error('Failed to create task');
      }
   });
};

export const deleteTask = taskId => {
   return fetch(`${BaseURL}/${taskId}`, {
      method: 'DELETE',
   }).then(response => {
      if (!response.ok) {
         throw new Error('Failed to delete task');
      }
   });
};
