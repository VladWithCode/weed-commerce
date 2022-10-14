import { useQuery } from 'react-query';
import FAQ from '../components/Faq/FAQ';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Product/Gallery';
import { fetchProducts } from '../services/ProductService';

export async function getServerSideProps(ctx) {
  const testProducts = [
    {
      id: 1,
      slug: 'blue-haze-1gr-indica',
      name: 'Gorila Glue',
      price: 30000,
    },
    {
      id: 2,
      slug: 'blue-haze-1gr-indica',
      name: 'Blue Dream',
      price: 85000,
    },
    {
      id: 3,
      slug: 'blue-haze-1gr-indica',
      name: 'Gelato',
      price: 60000,
    },
  ];

  return { props: { featuredStrains: testProducts } };
}

export default function Home({ featuredStrains }) {
  const { error, isLoading, data } = useQuery(['products'], fetchProducts);

  return (
    <>
      <Hero strains={featuredStrains} />
      {!isLoading && data.products && <Gallery products={data.products} />}
      <FAQ />
    </>
  );
}
