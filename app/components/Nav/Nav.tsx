import Image from 'next/image';
import { NAV_ITEMS } from './constant';
import logoPng from '@/public/logo.png';
import { NavItem } from './NavItem';

export function Nav() {
  return (
    <div>
      <Image src={logoPng} alt='Logo' className='w-40' />
      <nav className='space-y-4 mt-4'>
        {NAV_ITEMS.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
      </nav>
    </div>
  );
}
