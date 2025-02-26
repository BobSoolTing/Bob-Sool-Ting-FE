import React from 'react';
import { ReactNode } from 'react';
import Link from 'next/link';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';
import ProfileItem from '@/components/shared/ProfileItem';
import { DepartmentIcon, MypageIcon } from '@/assets/icons/SvgIcon';

export default function ProfileEditPage() {
  const profileItems = [
    { icon: MypageIcon, label: '닉네임', value: '신짱구', href: '/my-page/profile/nickname' },
    { icon: DepartmentIcon, label: '학과', value: '떡잎마을방범학과', href: '/my-page/profile/department' },
  ];

  return (
    <>
      <div className='flex pt-8 pb-4 border-b-2 border-[#EEEEEE]'>
        <Link href='/my-page/profile/image' className='w-full'>
          <ProfileItem />
        </Link>
      </div>
      <div className='flex flex-col my-4 mx-4'>
        {profileItems.map((item, index) => (
          <div key={index}>
            <Link href={item.href} className='block'>
              <div className='flex items-center h-10 gap-2 px-2 cursor-pointer'>
                <item.icon />
                <div className='text-lg font-medium text-left text-[#1b1b1b]'>{item.label}</div>
                <div className='text-lg font-medium text-right text-[#999] ml-auto'>{item.value}</div>
              </div>
            </Link>
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
