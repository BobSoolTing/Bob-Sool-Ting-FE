import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function AlertPage() {
  return <div>alert</div>;
}

AlertPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'알림'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
