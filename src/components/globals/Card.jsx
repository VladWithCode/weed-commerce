import React from 'react';

function Card({ className: csName, children }) {
  const className =
    'flex flex-col rounded-sm text-white shrink-0 basis-80 overflow-hidden';

  return (
    <div className={csName?.length > 0 ? className + ' ' + csName : className}>
      {children}
    </div>
  );
}

export default Card;
