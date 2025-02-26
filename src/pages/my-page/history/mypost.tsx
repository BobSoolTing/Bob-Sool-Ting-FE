import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function MyPostPage() {
  return <div>mypost</div>;
}

MyPostPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'내 모집글'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
