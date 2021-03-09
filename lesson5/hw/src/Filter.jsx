import React from 'react';

const Filter = p => {
   return (
      <div className="filter">
         <span className="filter__count">{p.count}</span>
         <input type="text" className="filter__input" value={p.filterText} onChange={p.onChange} />
      </div>
   );
};

export default Filter;
