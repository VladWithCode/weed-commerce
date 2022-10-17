import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Toggler from './Toggler';
import Controls from './Controls';
import Menu from './Menu';
import SearchModal from './SearchModal';
import { useInView } from 'react-intersection-observer';

function Header() {
  const [isMenuActive, setMenuIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      <span className='w-full' />
      <div className='fixed top-0 left-0 right-0 h-24 bg-primary border-b-2 border-accents px-6 flex items-center text-accents z-30'>
        <Toggler setIsActive={setMenuIsActive} />
        <div className='img-container h-20 w-20 m-auto basis-1/3 flex justify-center'>
          <Link href='/'>
            <a>
              <Image
                src='/img/logo_handless_light.png'
                height={80}
                width={80}
                alt='SK LEAF LOGO'
              />
            </a>
          </Link>
        </div>
        <Controls setIsSearchActive={setIsSearchActive} />
        <Menu isActive={isMenuActive} setIsActive={setMenuIsActive} />
        <SearchModal
          isActive={isSearchActive}
          setIsActive={setIsSearchActive}
        />
      </div>
    </>
  );
}

export default Header;
