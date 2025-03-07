import React from 'react';
import { ReactNode } from 'react';
import BottomSheet from './BottomSheet';
import ProfileItem from '../ProfileItem';

interface BottomSheetAlertProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetAlert({ className, isOpen, onClose }: BottomSheetAlertProps) {
  return (
    <BottomSheet height={'auto'} className={className} isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col h-[326px] mx-4 my-4 gap-2'>
        <span className='w-[380px] h-[auto] text-xl font-bold text-center text-[#1b1b1b]'>00에 참여하고 싶은 00님의 상세정보에요.</span>
        <div className='flex justify-center w-full'>
          <ProfileItem />
        </div>
        <div className='w-[380px] h-[50px] px-2 py-2 rounded-md border border-[#2f7dff]'>
          <p className='w-[auto] h-[auto] text-xs font-medium text-left text-[#1b1b1b]'>
            선배님 메뉴는 정해졌나요?? 찌개로 먹으면 너무 좋을 거 같아요.
          </p>
        </div>
        <div className='flex mt-2'>
          <div className='w-[186px] h-[50px] flex items-center justify-center rounded-md bg-[#999] mx-auto cursor-pointer hover:bg-[#8A8A8A]'>
            <p className='text-xl font-bold text-white'>거절</p>
          </div>
          <div className='w-[186px] h-[50px] flex items-center justify-center rounded-md bg-[#2f7dff] mx-auto cursor-pointer hover:bg-[#2768FF]'>
            <p className='text-xl font-bold text-white'>수락</p>
          </div>
        </div>
      </div>
    </BottomSheet>
  );
}
