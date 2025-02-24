import { ReactNode } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BottomBar from '@/components/shared/bst/BottomBar';
import profileImage from '@/assets/images/profileImage.png';
import { ChevronRightIcon, MyPostIcon, MatchingIcon, MeeTingIcon, LikeIcon, CommentIcon, AlertIcon } from '@/assets/icons/SvgIcon';

export default function MyPage() {
  return (
    <div className='flex flex-col relative bg-[#f6f8fa]'>
      {/* 헤더 */}
      <div className='px-6 pb-6 pt-14'>
        <span className='text-2xl font-bold text-left text-[#1b1b1b]'>마이페이지</span>
      </div>

      {/* 프로필 정보 관련 */}
      <div className='flex justify-center'>
        <div className='flex w-96 h-28 rounded-[18px] bg-white px-6 py-6 gap-6'>
          <Image src={profileImage} width={64} height={64} alt='사용자 프로필' className='rounded-full'></Image>
          <div className='flex flex-col flex-1 mt-1'>
            <div className='flex items-center gap-2'>
              <span className='text-2xl font-bold text-[#1b1b1b]'>신짱구</span>
              <span className='text-[10px] text-[#767676]'>B0</span>
            </div>
            <span className='text-base text-[#767676] text-left'>프로필 수정하기</span>
          </div>
          <div className='flex items-center '>
            <ChevronRightIcon />
          </div>
        </div>
      </div>

      {/* 기록 관련 */}
      <div className='flex justify-center pt-4'>
        <div className='w-[380px] h-[316px] rounded-[18px] bg-white px-6 py-6 gap-6'>
          <span className='flex h-5 text-2xl font-bold text-left text-[#767676]'>기록</span>
          <div className='flex flex-col gap-4 pt-6'>
            <Link href={'/my-page/history/mypost'}>
              <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
                <div className='flex items-center gap-4'>
                  <MyPostIcon />
                  <span>내 모집글</span>
                </div>
                <ChevronRightIcon />
              </div>
            </Link>
            <Link href={'/my-page/history/matching'}>
              <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
                <div className='flex items-center gap-4'>
                  <MatchingIcon />
                  <span>매칭 완료</span>
                </div>
                <ChevronRightIcon />
              </div>
            </Link>
            <Link href={'/my-page/history/meeting'}>
              <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
                <div className='flex items-center gap-4'>
                  <MeeTingIcon />
                  <span>만남 기록</span>
                </div>
                <ChevronRightIcon />
              </div>
            </Link>
            <Link href={'/my-page/history/like'}>
              <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
                <div className='flex items-center gap-4'>
                  <LikeIcon />
                  <span>좋아요</span>
                </div>
                <ChevronRightIcon />
              </div>
            </Link>
            <Link href={'/my-page/history/comment'}>
              <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
                <div className='flex items-center gap-4'>
                  <CommentIcon className='w-24 h-24' />
                  <span>댓글</span>
                </div>
                <ChevronRightIcon />
              </div>
            </Link>
            <Link href={'/my-page/history/alert'}>
              <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
                <div className='flex items-center gap-4'>
                  <AlertIcon />
                  <span>알림</span>
                </div>
                <ChevronRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

MyPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
