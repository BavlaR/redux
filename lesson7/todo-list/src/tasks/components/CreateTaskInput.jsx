import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
   state = {
      value: '',
   };

   handleChange = e => {
      this.setState({
         value: e.target.value,
      });
   };

   render() {
      const { value } = this.state;
      return (
         <div className="create-task">
            <input
               type="text"
               className="create-task__input"
               value={value}
               onChange={this.handleChange}
            />
            <button
               className="btn create-task__btn"
               onClick={() => {
                  this.props.onCreate(value);
                  this.setState({
                     value: '',
                  });
               }}
            >
               Create
            </button>
         </div>
      );
   }
}

CreateTaskInput.propTypes = {
   onCreate: PropTypes.func.isRequired,
};

export default CreateTaskInput;
