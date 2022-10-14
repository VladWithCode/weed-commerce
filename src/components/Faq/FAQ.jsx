import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    q: 'Que es lo que venden?',
    a: 'La ptm wn odioso',
  },
  {
    id: 2,
    q: 'Tienen envio gratis?',
    a: 'Por el momento, no estamos ofreciendo envios gratis.',
  },
  {
    id: 3,
    q: 'Cuanto tardará en llegar mi pedido?',
    a: 'Por lo regular, le toma de 2 a 5 días hábiles para llegar a los pedidos',
  },
];

function FAQ({}) {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className='faq max-w-full overflow-hidden text-white p-4'>
      <h2 className='text-2xl text-center pb-4'>Preguntas Frecuentes</h2>
      <div className='faq-questions flex gap-2 flex-wrap'>
        {questions.map(q => (
          <Question
            question={q}
            key={q.id}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
