import React from 'react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import Button from '@/components/shared/Button';
import MatchedHeader from '@/components/shared/match/MatchedHeader';
import MatchedContent from '@/components/shared/match/MatchedContent';

export default function MatchedPage() {
  const router = useRouter();

  return (
    <div className='flex flex-col min-h-screen'>
      <MatchedHeader />
      <MatchedContent />
      <div className='pt-16'>
        <Button isComplete={true} onClick={() => router.back()}>
          확인
        </Button>
      </div>
    </div>
  );
}

MatchedPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
