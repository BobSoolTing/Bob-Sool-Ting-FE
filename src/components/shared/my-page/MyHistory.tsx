import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, MyPostIcon, MatchingIcon, MeeTingIcon, MyLikeIcon, MyCommentIcon, AlertIcon } from '@/assets/icons/SvgIcon';

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

const historyItems = [
  { icon: MyPostIcon, text: '내 모집글', href: '/my-page/history/mypost' },
  { icon: MatchingIcon, text: '매칭 완료', href: '/my-page/history/matching' },
  { icon: MeeTingIcon, text: '만남 기록', href: '/my-page/history/meeting' },
  { icon: MyLikeIcon, text: '좋아요', href: '/my-page/history/like' },
  { icon: MyCommentIcon, text: '댓글', href: '/my-page/history/comment' },
  { icon: AlertIcon, text: '알림', href: '/my-page/history/alert' },
];

export default function MyHistory() {
  return (
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
  );
}
