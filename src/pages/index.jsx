import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-24 bg-pink-200 border-b-2 border-pink-300 px-6 flex items-center'>
      <div className='toggler flex flex-col justify-center items-start w-6 gap-y-1 basis-1/3'>
        <span className='h-1 w-8 bg-pink-400' />
        <span className='h-1 w-6 bg-pink-400' />
        <span className='h-1 w-4 bg-pink-400' />
      </div>
      <div className='img-container h-10 w-10 m-auto basis-1/3 flex justify-center'>
        <Image
          src='/img/sk_leaf.png'
          height={42}
          width={42}
          alt='SK LEAF LOGO'
        />
      </div>
      <div className='controls flex gap-x-2 basis-1/3 justify-end text-pink-400'>
        <svg className='h-8 w-8 fill-current'>
          <use href='/svg/sprites.svg#search'></use>
        </svg>
        <svg className='h-8 w-8 fill-current'>
          <use href='/svg/sprites.svg#cart'></use>
        </svg>
      </div>
    </div>
  );
}
