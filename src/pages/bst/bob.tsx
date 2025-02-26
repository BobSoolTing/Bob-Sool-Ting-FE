import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import CategoryBar from '@/components/shared/bst/CategoryBar';
import Write from '@/components/shared/bst/Write';
import SearchBar from '@/components/shared/search/SearchBar';

export default function BobPage() {
  return;
}

BobPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <CategoryBar>
        <SearchBar />
        <BottomBar>
          {page}
          <Write />
        </BottomBar>
      </CategoryBar>
    </>
  );
};
