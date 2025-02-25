import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';
import ProfileItem from '@/components/shared/ProfileItem';
import { DepartmentIcon, MypageIcon } from '@/assets/icons/SvgIcon';

export default function ProfileEditPage() {
  return (
    <>
      <div className='flex pt-8 pb-4 border-b-2 border-[#EEEEEE]'>
        <ProfileItem />
      </div>
      <div className='flex flex-col my-4 mx-4'>
        <div className='flex items-center h-10 gap-2 pt-2 pb-1 px-2'>
          <MypageIcon />
          <div className='text-lg font-medium text-left text-[#1b1b1b]'>닉네임</div>
          <div className='text-lg font-medium text-right text-[#999] ml-auto'>신짱구</div>
        </div>
        <div className='border-b-2 border-[#F7F7F8]'></div>
        <div className='flex items-center h-10 gap-2 pt-1 pb-2 px-2'>
          <DepartmentIcon />
          <div className='text-lg font-medium text-left text-[#1b1b1b]'>학과</div>
          <div className='text-lg font-medium text-right text-[#999] ml-auto'>떡잎마을방범학과</div>
        </div>
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
