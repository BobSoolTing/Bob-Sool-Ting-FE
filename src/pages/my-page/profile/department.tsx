import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Header from '@/components/shared/bst/Header';

export default function DepartmentPage() {
  return <div>학과 변경</div>;
}

DepartmentPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'학과 변경'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
