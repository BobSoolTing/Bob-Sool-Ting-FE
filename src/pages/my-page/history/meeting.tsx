import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function MeetingPage() {
  return <div>meeting</div>;
}

MeetingPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'만남 기록'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
