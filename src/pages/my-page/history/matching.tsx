import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function MatchingPage() {
  return <div>matching</div>;
}

MatchingPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'매칭 완료'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
