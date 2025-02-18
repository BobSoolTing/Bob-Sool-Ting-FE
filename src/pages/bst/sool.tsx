import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/BottomBar';
import CategoryBar from '@/components/shared/CategoryBar';
import Writing from '@/components/shared/Writing';

export default function SoolPage() {
  return <div>술약 페이지입니당</div>;
}

SoolPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <CategoryBar>
        <BottomBar>
          {page}
          <Writing />
        </BottomBar>
      </CategoryBar>
    </>
  );
};
