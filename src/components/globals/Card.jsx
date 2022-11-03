import React from 'react';
import getClassname from '../../utils/getClassname';

function Card({ className: csName, children, replaceBaseClass = false }) {
  const className = 'basis-80 flex-col';

  return (
    <div
      className={getClassname(
        'flex rounded-sm text-white shrink-0 overflow-hidden',
        !replaceBaseClass ? className : null,
        csName
      )}>
      {children}
    </div>
  );
}

export default Card;
