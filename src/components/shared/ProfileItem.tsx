import React from 'react';
import profileImage from '@/assets/images/profileImage.png';
import Image from 'next/image';
import { ManIcon, WomanIcon } from '@/assets/icons/SvgIcon';

const userData = {
  nickname: '맹구',
  gender: 'MAN',
  birth: '94',
  department: '컴퓨터과학과',
  studentNumber: 23,
  rating: 50,
};

interface ProfileItemProps {
  imageSize?: number; // 이미지 크기를 위한 props 추가
}

export default function ProfileItem({ imageSize = 120 }: ProfileItemProps) {
  return (
    <div className='flex flex-col items-center justify-center w-[412px] h-[174px] gap-1 '>
      {/* 프로필 이미지 */}
      <Image src={profileImage} height={imageSize} width={imageSize} alt='프로필 이미지' className='rounded-full' />

      {/* 이름 & 학점 */}
      <div className='flex items-center h-6 gap-2 mt-1'>
        <span className='w-[auto] text-xl font-bold text-[#1b1b1b]'>{userData.nickname}</span>
        <div className='w-[26px] h-3 flex items-center justify-center rounded-sm bg-[#00b0b9]/20'>
          <span className='text-[10px] font-medium text-[#767676]'>B0</span>
        </div>
        {userData.gender === 'MAN' ? <ManIcon className='w-2 h-2' /> : <WomanIcon className='w-2 h-2' />}
      </div>

      {/* 학과 및 추가 정보 */}
      <span className='h-[18px] text-base font-bold text-[#1b1b1b]'>
        {userData.department} {userData.studentNumber}학번 {userData.birth}년생
      </span>
    </div>
  );
}
