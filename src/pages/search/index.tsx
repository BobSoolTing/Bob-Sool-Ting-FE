import React from 'react';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/BottomBar';
import SearchBar from '@/components/shared/SearchBar';

export default function SearchPage() {
  return <div>검색 페이지입니당.</div>;
}

SearchPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <SearchBar />
      <BottomBar>{page}</BottomBar>
    </>
  );
};
