import React, { useMemo, useReducer } from 'react';

const createPaginationSelectors = pageCount => {
  let selectors = [];

  for (let i = 0; i < pageCount; i++) {
    selectors.push(
      <li className='flex items-center px-4 bg-secondary border-y-2 border-r-2 border-rose-300'>
        {i + 1}
      </li>
    );
  }

  return selectors;
};

function Pagination({ page, pages }) {
  const [state, dispatch] = useReducer(paginationReducer, {
    page: page,
    nextPage: null,
    prevPage: null,
    pages: pages,
  });
  const pageSelectors = useMemo(
    () => createPaginationSelectors(pages),
    [pages]
  );

  return (
    <ul className='col-start-3 col-span-6 justify-self-center flex h-12 list-none border-collapse'>
      <li className='flex items-center px-4 bg-secondary border-2 border-rose-300 rounded-l'>
        Primera
      </li>
      {pageSelectors}
      <li className='flex items-center px-4 bg-secondary border-y-2 border-r-2 border-rose-300 border-collapse rounded-r'>
        Última
      </li>
    </ul>
  );
}

export default Pagination;

const paginationReducer = (state, action) => {
  const { type, payload } = action;

  const reducerActions = {
    setPage: page => {
      let nextPage = page + 1;
      let prevPage = page - 1;

      return {
        ...state,
        page: page,
        nextPage: nextPage > state.pages ? state.pages : nextPage,
        prevPage: prevPage < 1 ? 1 : prevPage,
      };
    },

    gotoPrevPage: () => {
      let nextPage = state.page;
      let page = nextPage - 1;
      let prevPage = page - 1;

      return {
        ...state,
        page: page,
        nextPage: nextPage > state.pages ? state.pages : nextPage,
        prevPage: prevPage < 1 ? 1 : prevPage,
      };
    },

    gotoNextPage: () => {
      let prevPage = state.page;
      let page = nextPage + 1;
      let nextPage = page + 1;

      return {
        ...state,
        page: page,
        nextPage: nextPage > state.pages ? state.pages : nextPage,
        prevPage: prevPage < 1 ? 1 : prevPage,
      };
    },

    goToStart: () => {
      return {
        ...state,
        page: 1,
        nextPage: nextPage > state.pages ? state.pages : nextPage,
        prevPage: prevPage < 1 ? 1 : prevPage,
      };
    },

    goToEnd: () => {
      return {
        ...state,
        page: state.pages,
        nextPage: nextPage > state.pages ? state.pages : nextPage,
        prevPage: prevPage < 1 ? 1 : prevPage,
      };
    },
  };
};
