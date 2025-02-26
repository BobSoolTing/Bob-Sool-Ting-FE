import React from 'react';
import Link from 'next/link';
import { WritingIcon } from '@/assets/icons/SvgIcon';
import { useRouter } from 'next/router';

export default function Writing() {
  const router = useRouter();

  return (
    <Link href={`${router.asPath}/writing`}>
      <div className='fixed bottom-14 mb-4 ml-[306px]'>
        <div className='w-[90px] h-[35px] relative rounded-[50px] bg-[#2f7dff] hover:bg-[#2768FF] transition-all'>
          <div className='w-full h-full absolute' />
          <div className='relative flex items-center justify-center w-full h-full gap-1.5 text-white text-base font-medium'>
            <WritingIcon />
            <p>글쓰기</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
