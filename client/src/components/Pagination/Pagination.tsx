import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.scss';

type PaginationProps = {
  onChangePage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <div className={styles.root}>
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
