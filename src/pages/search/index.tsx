import React from 'react'
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/BottomBar'

export default function SearchPage() {
  return (
    <div>검색입니당.</div>
  )
}

SearchPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};