import React from 'react';
import { ReactNode } from 'react';
import { DeleteButtonIcon, ProfileIcon } from '@/assets/icons/SvgIcon';

interface AlertProps {
  children: ReactNode;
}

export default function AlertItem({ children }: AlertProps) {
  return (
    <div className='w-[412px] h-[106px] flex items-center justify-between bg-white border-b border-[#d9d9d9] px-4'>
      <div className='flex items-center gap-3'>
        <ProfileIcon />
        <div className='flex w-[264px] min-h-[74px] flex-col gap-2'>
          <p className='text-base font-bold text-[#1b1b1b]'>밥약 하실 후배님을 찾습니다.</p>
          <p className='text-xs font-medium text-[#1b1b1b] flex-grow line-clamp-2'>내용을 작성하지 않았습니다</p>
          <p className='text-[10px] font-medium text-[#767676]'>25. 04. 30</p>
        </div>
      </div>

      <div className='self-start mt-4'>
        <DeleteButtonIcon />
      </div>
    </div>
  );
}
