import React from 'react';

const Pagination = p => {
   const { currentPage } = p;

   const isPrevPageAvailable = currentPage > 1;
   const isNextPageAvailable = currentPage * p.itemsPerPage < p.totalItems;

   return (
      <div className="pagination">
         <button className="btn" onClick={p.goPrev} disabled={!isPrevPageAvailable}>
            {isPrevPageAvailable && '←'}
         </button>
         <span className="pagination__page">{currentPage}</span>
         <button className="btn" onClick={p.goNext} disabled={!isNextPageAvailable}>
            {isNextPageAvailable && '→'}
         </button>
      </div>
   );
};

export default Pagination;
