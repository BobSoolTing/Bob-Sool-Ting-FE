import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { BackIcon, CloseIcon } from '@/assets/icons/SvgIcon';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const router = useRouter();
  const { pathname } = router;

  const isCloseIconPage = pathname === '/write';
  const IconComponent = isCloseIconPage ? CloseIcon : BackIcon;

  return (
    <div className='w-[412px] h-[56px] relative bg-white border-b border-[#eee] flex items-center'>
      <div className='cursor-pointer'>
        <IconComponent onClick={() => router.back()} />
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-[#1b1b1b]'>{children}</div>
    </div>
  );
}
