import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/BottomBar';
import CategoryBar from '@/components/shared/CategoryBar';

export default function BobPage() {
  return <div>밥약 페이지입니당</div>;
}

BobPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <CategoryBar>
        <BottomBar>{page}</BottomBar>
      </CategoryBar>
    </>
  );
};
