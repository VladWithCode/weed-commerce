import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/globals/Loading';
import PageHeader from '../../../components/globals/PageHeader';
import Pagination from '../../../components/store/Pagination';
import ProductListing from '../../../components/store/ProductListing';
import { fetchProductsByCategory } from '../../../utils/fetchers/products';

function CategoryPage() {
  const router = useRouter();
  const { ctg: category, page } = router.query;

  const { data, isLoading, isError } = useQuery(
    ['product-per-ctg', page, category],
    () => fetchProductsByCategory(category, { page: page })
  );

  if (isLoading || !data)
    return (
      <div className='pt-24'>
        <Loading />
      </div>
    );

  return (
    <>
      <PageHeader>{category}</PageHeader>
      <div className='container py-6 mx-auto grid grid-cols-1 xl:grid-cols-8 gap-y-6 text-white'>
        {/* <Sidebar /> */}
        <div className='col-span-full px-2 xl:col-start-3 xl:col-span-6'>
          <ProductListing products={data.products} />
        </div>
        <div className='justify-self-center xl:col-start-3 xl:col-span-6'>
          <Pagination page={page} pages={data.pages} category={category} />
        </div>
      </div>
    </>
  );
}

export default CategoryPage;
