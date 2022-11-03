import { useQuery } from 'react-query';
import FAQ from '../components/Faq/FAQ';
import Loading from '../components/globals/Loading';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Product/Gallery';
import { fetchProducts } from '../utils/fetchers/products';

export default function Home({}) {
  const { error, isLoading, data } = useQuery(['products'], () =>
    fetchProducts({ limit: 5 })
  );

  if (isLoading || error)
    return (
      <div className='w-screen h-screen'>
        <Loading />
      </div>
    );

  return (
    <>
      <Hero strains={data.products} />
      {!isLoading && data.products && <Gallery products={data.products} />}
      <FAQ />
    </>
  );
}
