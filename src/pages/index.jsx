import Hero from '../components/Hero/Hero';

export async function getServerSideProps(ctx) {
  const testProducts = [
    {
      id: 1,
      slug: 'blue-haze-1gr-indica',
      name: 'Gorila Glue',
    },
    {
      id: 2,
      slug: 'blue-haze-1gr-indica',
      name: 'Blue Dream',
    },
    {
      id: 3,
      slug: 'blue-haze-1gr-indica',
      name: 'Gelato',
    },
  ];

  return { props: { featuredStrains: testProducts } };
}

export default function Home({ featuredStrains }) {
  return (
    <>
      <Hero strains={featuredStrains} />
    </>
  );
}
