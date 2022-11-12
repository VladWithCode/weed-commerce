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
        src={strain.assetPath + strain.thumb}
        alt='weed'
        layout='fill'
        className='row-span-full col-span-full z-10 object-cover object-center'
      />
      <span className='row-span-full col-span-full z-20 bg-gray-800 bg-opacity-40'></span>
      <h1 className='row-start-2 col-start-1 col-span-2 px-8 sm:mx-auto sm:col-span-1 sm:col-start-1 sm:justify-self-end z-30 text-white text-4xl uppercase font-bold'>
        {strain.name}
      </h1>
      <Link href={'/tienda/strains/'.concat(strain.slug)}>
        <a className='btn bg-aux_1 p-2 row-start-3 col-start-1 justify-self-center self-start rounded-sm text-md text-white font-normal font-secondary z-30'>
          Compralo ahora
        </a>
      </Link>
    </div>
  );
}

export default Slide;
