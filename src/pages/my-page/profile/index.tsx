import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';

export default function ProfileEditPage() {
  return <div>index</div>;
}

ProfileEditPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'프로필 수정'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
