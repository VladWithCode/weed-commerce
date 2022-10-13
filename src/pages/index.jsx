import Hero from '../components/Hero/Hero';
import Gallery from '../components/Product/Gallery';

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
  return (
    <>
      <Hero strains={featuredStrains} />
      <Gallery products={featuredStrains} />
    </>
  );
}
