import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Toggler from './Toggler';
import Controls from './Controls';
import Menu from './Menu';
import SearchModal from './SearchModal';

function Header() {
  const [isMenuActive, setMenuIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      <span className='w-full' />
      <div className='fixed top-0 left-0 right-0 h-16 bg-primary border-b-2 border-indigo-500 px-6 flex items-center text-secondary z-30'>
        <Toggler setIsActive={setMenuIsActive} />
        <div className='img-container h-14 w-14 m-auto basis-1/3 flex justify-center'>
          <Link href='/'>
            <a className='h-14 w-14'>
              <Image
                src='/img/logo_handless_light.png'
                height={52}
                width={52}
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
