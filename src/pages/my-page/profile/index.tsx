import React from 'react';
import { ReactNode } from 'react';
import Link from 'next/link';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';
import ProfileItem from '@/components/shared/ProfileItem';
import { DepartmentIcon, MypageIcon } from '@/assets/icons/SvgIcon';

export default function ProfileEditPage() {
  const profileItems = [
    { icon: MypageIcon, label: '닉네임', value: '신짱구' },
    { icon: DepartmentIcon, label: '학과', value: '떡잎마을방범학과' },
  ];

  return (
    <>
      <div className='flex pt-8 pb-4 border-b-2 border-[#EEEEEE]'>
        <ProfileItem />
      </div>
      <div className='flex flex-col my-4 mx-4 py-2'>
        {profileItems.map((item, index) => (
          <div key={index}>
            <div className='flex items-center h-10 gap-2 px-2'>
              <item.icon />
              <div className='text-lg font-medium text-left text-[#1b1b1b]'>{item.label}</div>
              <div className='text-lg font-medium text-right text-[#999] ml-auto'>{item.value}</div>
            </div>
            {index < profileItems.length - 1 && <div className='border-b-2 border-[#F7F7F8] mt-1 mb-1' />}
          </div>
        ))}
      </div>
    </>
  );
}

ProfileEditPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'프로필 수정'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
