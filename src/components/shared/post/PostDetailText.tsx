import { PlaceIcon, DateIcon, PersonnelIcon } from '@/assets/icons/SvgIcon';
import React, { ReactNode } from 'react';

interface DetailPageTextProp {
  children: ReactNode;
  type: 'title' | 'content' | 'place' | 'date' | 'personnel';
}

export default function DetailPageText({ children, type }: DetailPageTextProp) {
  switch (type) {
    case 'title':
      return <p className='w-[380px] h-[30px] text-xl font-bold text-left text-[#1b1b1b] flex items-center my-2'>{children}</p>;
    case 'content':
      return <p className='w-[380px] mt-2 mb-4 text-base font-medium text-left text-[#999]'>{children}</p>;
    case 'place':
      return (
        <div className='flex-grow-0 flex-shrink-0 w-[380px] h-4 flex items-center my-2'>
          <PlaceIcon className='w-4 h-4' />
          <p className='ml-2 text-base font-medium text-left text-[#1b1b1b]'>{children}</p>
        </div>
      );
    case 'date':
      return (
        <div className='flex-grow-0 flex-shrink-0 w-[380px] h-4 flex items-center my-2'>
          <DateIcon className='w-4 h-4' />
          <p className='ml-2 text-base font-medium text-left text-[#1b1b1b]'>{children}</p>
        </div>
      );
    case 'personnel':
      return (
        <div className='flex-grow-0 flex-shrink-0 w-[380px] h-4 flex items-center my-2'>
          <PersonnelIcon className='w-4 h-4' />
          <p className='max-w-[380px] ml-2 text-base font-medium text-left text-[#1b1b1b] text-ellipsis whitespace-nowrap overflow-hidden break-all'>
            {children}
          </p>
        </div>
      );
    default:
      return;
  }
}
