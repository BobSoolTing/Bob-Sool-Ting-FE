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
      <div className='w-[132px] h-[30px] absolute left-[140px] top-[50%] transform -translate-y-[50%] text-2xl font-bold text-center text-[#1b1b1b]'>
        {children}
      </div>
    </div>
  );
}
