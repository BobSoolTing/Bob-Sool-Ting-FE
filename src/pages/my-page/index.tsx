import { ReactNode } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BottomBar from '@/components/shared/bst/BottomBar';
import profileImage from '@/assets/images/profileImage.png';
import {
  ChevronRightIcon,
  MyPostIcon,
  MatchingIcon,
  MeeTingIcon,
  LikeIcon,
  CommentIcon,
  AlertIcon,
  SupportIcon,
  FeedbackIcon,
  PolicyIcon,
} from '@/assets/icons/SvgIcon';

type HistoryItemProps = {
  icon: React.ComponentType;
  text: string;
  href: string;
};

const HistoryItem = ({ icon: Icon, text, href }: HistoryItemProps) => (
  <Link href={href}>
    <div className='flex justify-between text-lg text-left text-[#1b1b1b] items-center h-6'>
      <div className='flex items-center gap-4'>
        <Icon />
        <span>{text}</span>
      </div>
      <ChevronRightIcon />
    </div>
  </Link>
);

export default function MyPage() {
  const historyItems = [
    { icon: MyPostIcon, text: '내 모집글', href: '/my-page/history/mypost' },
    { icon: MatchingIcon, text: '매칭 완료', href: '/my-page/history/matching' },
    { icon: MeeTingIcon, text: '만남 기록', href: '/my-page/history/meeting' },
    { icon: LikeIcon, text: '좋아요', href: '/my-page/history/like' },
    { icon: CommentIcon, text: '댓글', href: '/my-page/history/comment' },
    { icon: AlertIcon, text: '알림', href: '/my-page/history/alert' },
  ];

  const supportItems = [
    { icon: SupportIcon, text: '고객 센터', href: '/my-page/support' },
    { icon: FeedbackIcon, text: '의견 남기기', href: '/my-page/support' },
    { icon: PolicyIcon, text: '약관 및 정책', href: '/my-page/support' },
  ];

  return (
    <div className='flex flex-col relative bg-[#f6f8fa] min-h-screen'>
      {/* 헤더 */}
      <div className='px-6 pb-6 pt-14'>
        <span className='text-2xl font-bold text-left text-[#1b1b1b]'>마이페이지</span>
      </div>

      {/* 프로필 정보 관련 */}
      <div className='flex justify-center'>
        <Link href={'/my-page/profile'}>
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
        </Link>
      </div>

      {/* 기록 관련 */}
      <div className='flex justify-center pt-4'>
        <div className='w-96 rounded-[18px] bg-white px-6 py-6'>
          <span className='text-2xl font-bold text-left text-[#767676]'>기록</span>
          <div className='flex flex-col gap-4 pt-6'>
            {historyItems.map((item, index) => (
              <HistoryItem key={index} icon={item.icon} text={item.text} href={item.href} />
            ))}
          </div>
        </div>
      </div>

      {/* 고객지원 관련 */}
      <div className='flex justify-center pt-4'>
        <div className='w-96 rounded-[18px] bg-white px-6 py-6'>
          <span className='text-2xl font-bold text-left text-[#767676]'>고객지원</span>
          <div className='flex flex-col gap-4 pt-6'>
            {supportItems.map((item, index) => (
              <HistoryItem key={index} icon={item.icon} text={item.text} href={item.href} />
            ))}
          </div>
        </div>
      </div>
      <div className='flex text-lg font-bold text-[#999] ml-auto mr-8 mt-4'>로그아웃 </div>
    </div>
  );
}

MyPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
