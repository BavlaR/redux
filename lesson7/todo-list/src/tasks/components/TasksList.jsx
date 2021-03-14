import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as tasksActions from '../tasks.actions';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { tasksListSelector } from '../tasks.selectors';

class TasksList extends Component {
   componentDidMount() {
      this.props.getTasksList();
   }

   render() {
      return (
         <div className="todo-list">
            <CreateTaskInput onCreate={this.props.createTask} />
            <ul className="list">
               {this.props.tasks
                  .slice()
                  .sort((prev, next) => prev.done - next.done)
                  .map(task => (
                     <Task
                        {...task}
                        key={task.id}
                        onChange={this.props.updateTask}
                        onDelete={this.props.deleteTask}
                     />
                  ))}
            </ul>
         </div>
      );
   }
}

TasksList.propTypes = {
   getTasksList: PropTypes.func.isRequired,
   updateTask: PropTypes.func.isRequired,
   deleteTask: PropTypes.func.isRequired,
   createTask: PropTypes.func.isRequired,
   // tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapState = state => ({
   tasks: tasksListSelector(state),
});
const mapDispatch = {
   getTasksList: tasksActions.getTasksList,
   updateTask: tasksActions.updateTask,
   deleteTask: tasksActions.deleteTask,
   createTask: tasksActions.createTask,
};

export default connect(mapState, mapDispatch)(TasksList);
