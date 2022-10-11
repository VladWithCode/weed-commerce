import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Toggler from './Toggler';
import Controls from './Controls';
import Menu from './Menu';

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='h-24 bg-primary border-b-2 border-accents px-6 flex items-center text-accents'>
      <Toggler setIsActive={setIsActive} />
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
      <Controls />
      <Menu isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Header;
