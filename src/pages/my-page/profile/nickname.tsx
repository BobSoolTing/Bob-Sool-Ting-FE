import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';

export default function NicknamePage() {
  return <div>닉네임 변경</div>;
}

NicknamePage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'닉네임 변경'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
