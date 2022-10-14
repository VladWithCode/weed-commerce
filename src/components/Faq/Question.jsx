import React from 'react';
import Card from '../globals/Card';

function Question({ question, activeId, setActiveId }) {
  let active = false;

  if (question.id === activeId) active = true;

  return (
    <Card
      className={'faq-card p-2 grow shrink basis-full bg-primary'.concat(
        active ? ' active' : ''
      )}>
      <p
        className='text-lg font-light border-b-2 border-accents pb-2 cursor-pointer'
        onClick={e => (active ? setActiveId(-1) : setActiveId(question.id))}>
        {question.q}
      </p>
      <div className='faq-content flex justify-center items-center'>
        <p className='w-full font-semibold px-2'>{question.a}</p>
      </div>
    </Card>
  );
}

export default Question;
