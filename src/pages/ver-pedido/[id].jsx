import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/globals/Loading';
import { fetchSaleById } from '../../utils/fetchers/sales';

function OrderById() {
  const { id } = useRouter().query;
  const { data, isLoading, isError } = useQuery(['order-by-id', id], () =>
    fetchSaleById(id)
  );

  if (isLoading || !data.sale)
    return (
      <div className='pt-24'>
        <Loading />
      </div>
    );

  return <div>OrderById</div>;
}

export default OrderById;
