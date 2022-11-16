import React, { useMemo, useReducer } from 'react';
import PaginationButton from './PaginationButton';

const createPaginationSelectors = ({ page, pageCount, category }) => {
  let selectors = [];

  for (let i = 0; i < pageCount; i++) {
    selectors.push(
      <PaginationButton
        page={i + 1}
        category={category}
        className={
          page === i + 1
            ? 'underline underline-offset-2 pointer-events-none bg-opacity-90'
            : undefined
        }
        key={i}>
        {i + 1}
      </PaginationButton>
    );
  }

  return selectors;
};

function Pagination({ page, pages, category }) {
  const pageSelectors = useMemo(
    () => createPaginationSelectors({ page, pageCount: pages, category }),
    [page, pages, category]
  );

  return (
    <ul className='col-start-3 col-span-6 justify-self-center flex h-12 list-none border-collapse'>
      <PaginationButton
        page={1}
        category={category}
        className='border-2 rounded-l'
        replaceClassname={true}>
        Previa
      </PaginationButton>

      {pageSelectors}

      <PaginationButton page={pages} category={category} className='rounded-r'>
        Siguiente
      </PaginationButton>
    </ul>
  );
}

export default Pagination;
