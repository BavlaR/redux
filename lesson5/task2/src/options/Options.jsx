import React from 'react';
import PropTypes from 'prop-types';

const Options = p => (
   <div className="options">
      <div className="options__title">{p.title}</div>
      <ul className="options__list">
         {p.options.map(option => (
            <li key={option.id}>
               <button className="options__list-item" onClick={() => p.moveOption(option.id)}>
                  {option.name}
               </button>
            </li>
         ))}
      </ul>
   </div>
);

export default Options;

Options.propTypes = {
   title: PropTypes.string.isRequired,
   options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
   moveOption: PropTypes.func.isRequired,
};
