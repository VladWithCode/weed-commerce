import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/globals/Loading';
import PageHeader from '../../components/globals/PageHeader';
import CategoryListing from '../../components/store/CategoryListing';
import Sidebar from '../../components/store/Sidebar';
import { useShop } from '../../hooks/useShop';
import { fetchStoreTopCategories } from '../../utils/fetchers/categories';

function Tienda() {
  const { data, isLoading, isError } = useQuery(
    ['store-ctgs'],
    fetchStoreTopCategories,
    { refetchOnWindowFocus: false }
  );
  const initFilters = useShop(state => state.initFilters);

  useEffect(() => {
    if (!isLoading && !isError)
      initFilters([
        {
          key: 'Precios',
          options: [
            {
              label: 'Desde',
              id: 'price-from',
              active: false,
              value: null,
            },
            {
              label: 'Hasta',
              id: 'price-from',
              active: false,
              value: null,
            },
          ],
        },
        {
          key: 'categories',
          options: data.categories.map(ctg => ({
            label: ctg.name,
            id: ctg._id,
            active: false,
          })),
        },
      ]);
  }, [isLoading, isError]);

  if (isLoading || !data) return <Loading />;

  return (
    <>
      <PageHeader>Productos OP</PageHeader>
      <div className='container py-6 mx-auto grid grid-cols-8 text-white'>
        <Sidebar />
        <CategoryListing categories={data.categories} />
      </div>
    </>
  );
}

export default Tienda;
