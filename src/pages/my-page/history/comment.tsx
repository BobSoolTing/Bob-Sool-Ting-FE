import React from 'react';
import { ReactNode } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';

export default function CommentPage() {
  return <div>comment</div>;
}

CommentPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'댓글'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
