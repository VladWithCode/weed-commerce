import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/globals/Loading';
import PageHeader from '../../components/globals/PageHeader';
import Gallery from '../../components/Product/Gallery';
import { fetchStoreTopCategories } from '../../utils/fetchers/categories';

function Tienda() {
  const { data, isLoading, isError } = useQuery(
    ['store-ctgs'],
    fetchStoreTopCategories,
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <Loading />;

  console.log(data);

  return (
    <>
      <PageHeader>Productos OP</PageHeader>
      <Gallery />
    </>
  );
}

export default Tienda;
