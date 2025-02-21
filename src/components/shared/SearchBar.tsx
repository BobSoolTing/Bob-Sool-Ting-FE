import React from 'react';
import Link from 'next/link';
import { SearchBarIcon, ClearIcon, AlertIcon } from '@/assets/icons/SvgIcon';

export default function SearchBar() {
  return (
    <div className='flex w-[412px] h-11 relative overflow-hidden py-1 px-4'>
      <Link href={'/search'}>
        <div className='flex w-[340px] h-9 rounded-md items-center gap-2 text-base text-[#999] bg-[#f6f8fa] px-2'>
          <SearchBarIcon />
          나와 맞는 밥술팅 검색하기
          <span className='ml-auto'>
            <ClearIcon />
          </span>
        </div>
      </Link>
      <Link href='/alert'>
        <div className='flex absolute top-1/2 right-0 transform -translate-y-1/2 mr-4 items-center'>
          <AlertIcon />
        </div>
      </Link>
    </div>
  );
}
