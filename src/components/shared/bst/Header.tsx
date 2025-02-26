import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { CloseIcon } from '@/assets/icons/SvgIcon';

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const router = useRouter();

  return (
    <div className='w-[412px] h-[56px] relative bg-white border-t-0 border-r-0 border-b border-l-0 border-[#eee]'>
      <CloseIcon
        onClick={() => {
          router.back();
        }}
      />
      <div className='w-auto h-[30px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-center text-[#1b1b1b]'>
        {children}
      </div>
    </div>
  );
}
