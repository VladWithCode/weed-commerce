import { useRouter } from 'next/router';
import React from 'react';
import PageHeader from '../../components/globals/PageHeader';

const Index = () => {
  const { search } = useRouter().query;

  return (
    <>
      <PageHeader>
        <span className='text-2xl'>Buscar</span>
        <span className='font-light'>
          {search?.length > 0 ? ` | ${search}` : null}
        </span>
      </PageHeader>
    </>
  );
};

export default Index;
