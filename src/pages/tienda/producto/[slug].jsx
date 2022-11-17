import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/globals/Loading';
import { fetchProductBySlug } from '../../../utils/fetchers/products';

function Producto({}) {
  const { slug } = useRouter().query;
  const { data, isLoading, isError } = useQuery(
    ['fetch-single-product', slug],
    () => fetchProductBySlug(slug)
  );

  if (isLoading || isError)
    return (
      <div className='pt-24'>
        <Loading />
      </div>
    );

  return (
    <div className='relative'>
      <div className='pt-16 bg-slate-900'></div>
      <div className='container mx-auto mt-2 p-4'>
        <div className='py-1'>
          <Link href={`/tienda/${encodeURI(data.product.category)}`}>
            <a className='text-base'>{data.product.category}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Producto;
