import Image from 'next/image';
import Link from 'next/link';

function Slide({ strain, slideId, currentSlide }) {
  let isActive = false;
  if (currentSlide === slideId) isActive = true;

  return (
    <div
      className={'hero-slide absolute top-0 left-0 grid grid-cols-2 grid-rows-hero bg-primary'.concat(
        isActive ? ' active' : ''
      )}>
      <Image
        src='/img/weed.jpeg'
        alt='weed'
        layout='fill'
        className='row-span-full col-span-full z-10 object-cover object-center'
      />
      <span className='row-span-full col-span-full z-20 bg-gray-800 bg-opacity-40'></span>
      <h1 className='row-start-2 col-start-1 justify-self-end px-12 z-30 text-white text-4xl font-bold'>
        {strain.name}
      </h1>
      <Link href={'/tienda/strains/'.concat(strain.slug)}>
        <a className='row-start-3 col-start-2 justify-self-center self-start btn rounded-sm text-md text-white font-normal font-secondary z-30'>
          Comprar ya
        </a>
      </Link>
    </div>
  );
}

export default Slide;
