import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage }) => {
  return (
    <div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
