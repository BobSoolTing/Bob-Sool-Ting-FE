import { ReactNode } from 'react';
import React from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import MyHeader from '../../components/shared/my-page/MyHeader';
import MyProfile from '../../components/shared/my-page/MyProfile';
import MyHistory from '../../components/shared/my-page/MyHistory';
import MySupport from '../../components/shared/my-page/MySupport';
import LogOut from '../../components/shared/my-page/LogOut';

export default function MyPage() {
  return (
    <div className='flex flex-col relative bg-[#f6f8fa] min-h-screen'>
      <MyHeader />
      <MyProfile />
      <MyHistory />
      <MySupport />
      <LogOut />
    </div>
  );
}

MyPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
