import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/globals/Loading';
import PageHeader from '../../../components/globals/PageHeader';
import Pagination from '../../../components/store/Pagination';
import ProductListing from '../../../components/store/ProductListing';
import { fetchProductsPerCategory } from '../../../utils/fetchers/products';

function PerCategory() {
  const router = useRouter();
  const category = router.query.ctg;
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery(
    ['product-per-ctg', page, category],
    () => fetchProductsPerCategory(category, { page: page })
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
      <div className='container py-6 mx-auto grid grid-cols-8 gap-y-6 text-white'>
        {/* <Sidebar /> */}
        <ProductListing products={data.products} />
        <Pagination page={page} pages={data.pages} category={category} />
      </div>
    </>
  );
}

export default PerCategory;
