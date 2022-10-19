import { useQuery } from 'react-query';
import FAQ from '../components/Faq/FAQ';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Product/Gallery';
import { fetchProducts } from '../utils/fetchers/products';

export default function Home({}) {
  const { error, isLoading, data } = useQuery(['products'], fetchProducts);

  if (isLoading || error)
    return (
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <span className='text-white text-6xl font-bold py-12'>Loading...</span>
        <span className='rounded-full border-transparent border-t-white border-8 animate-spin w-12 h-12'></span>
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
