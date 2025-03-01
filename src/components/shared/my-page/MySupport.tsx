import React from 'react';
import Link from 'next/link';
import { ChevronRightIcon, SupportIcon, FeedbackIcon, PolicyIcon } from '@/assets/icons/SvgIcon';

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

export default function MySupport() {
  const supportItems = [
    { icon: SupportIcon, text: '고객 센터', href: '/my-page/support' },
    { icon: FeedbackIcon, text: '의견 남기기', href: '/my-page/support' },
    { icon: PolicyIcon, text: '약관 및 정책', href: '/my-page/support' },
  ];
  return (
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
  );
}
