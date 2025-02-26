import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function LikePage() {
  return <div>like</div>;
}

LikePage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'좋아요'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
