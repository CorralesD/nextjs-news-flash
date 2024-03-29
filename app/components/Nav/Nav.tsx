import Image from 'next/image';
import { NAV_ITEMS } from '../../constant';
import logoPng from '@/public/color-logo.png';
import { NavItem } from './NavItem';
import Link from 'next/link';

export function Nav() {
  return (
    <div>
      <Link href={'/'}>
        <Image src={logoPng} alt='Logo' className='w-40' />
      </Link>
      <nav className='space-y-4 mt-4'>
        {NAV_ITEMS.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
      </nav>
    </div>
  );
}
