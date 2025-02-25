import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';

export default function ImagePage() {
  return <div>프사 변경</div>;
}

ImagePage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'프로필 사진 변경'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
