import React, { ReactNode } from 'react';
import { ClockIcon, SearchCloseIcon } from '@/assets/icons/SvgIcon';

interface SearchResultItemProps {
  children: ReactNode;
}

export default function SearchResultItem({ children }: SearchResultItemProps) {
  return (
    <div className='w-[380px] h-8 relative overflow-hidden'>
      <div className='w-[364px] h-4 flex items-center justify-between'>
        <ClockIcon />
        <p className='text-base font-medium text-[#1b1b1b] mx-4 flex-1'>{children}</p>
        <SearchCloseIcon className='w-4 h-4 cursor-pointer' />
      </div>
    </div>
  );
}
