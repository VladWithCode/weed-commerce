import Link from 'next/link';
import React from 'react';
import getClassname from '../../utils/getClassname';

function PaginationButton({
  children,
  page,
  category,
  className,
  replaceClassname,
}) {
  return (
    <Link href={`/tienda/${category}/${page}`}>
      <li
        className={getClassname(
          'flex items-center px-4 bg-secondary border-rose-300 cursor-pointer btn',
          !replaceClassname ? 'border-y-2 border-r-2' : null,
          className
        )}>
        <a>{children}</a>
      </li>
    </Link>
  );
}

export default PaginationButton;
