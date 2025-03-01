import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import profileImage from '@/assets/images/profileImage.png';
import { ChevronRightIcon } from '@/assets/icons/SvgIcon';

export default function MyProfile() {
  return (
    <div className='flex justify-center'>
      <Link href={'/my-page/profile'}>
        <div className='flex w-96 h-28 rounded-[18px] bg-white px-6 py-6 gap-6'>
          <Image src={profileImage} width={64} height={64} alt='사용자 프로필' className='rounded-full'></Image>
          <div className='flex flex-col flex-1 mt-1'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl font-bold text-[#1b1b1b]'>신짱구</span>
              <span className='text-[10px] text-[#767676]'>B0</span>
            </div>
            <span className='text-base text-[#767676] text-left'>프로필 수정하기</span>
          </div>
          <div className='flex items-center '>
            <ChevronRightIcon />
          </div>
        </div>
      </Link>
    </div>
  );
}
