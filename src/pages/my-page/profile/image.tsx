import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';
import ProfileItem from '@/components/shared/ProfileItem';
import Button from '@/components/shared/Button';

export default function ImagePage() {
  return (
    <div className='flex justify-center items-center h-[762px]'>
      <ProfileItem imageSize={200} />
    </div>
  );
}

ImagePage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'프로필 사진 변경'}</Header>
      <BottomBar>{page}</BottomBar>
      <Button>적용</Button>
    </>
  );
};
