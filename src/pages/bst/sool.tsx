import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import CategoryBar from '@/components/shared/bst/CategoryBar';
import Writing from '@/components/shared/bst/Writing';
import SearchBar from '@/components/shared/search/SearchBar';

export default function SoolPage() {
  return;
}

SoolPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <CategoryBar>
        <SearchBar />
        <BottomBar>
          {page}
          <Writing />
        </BottomBar>
      </CategoryBar>
    </>
  );
};
