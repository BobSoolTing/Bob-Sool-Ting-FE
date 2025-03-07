import React from 'react';
import { ReactNode } from 'react';
import BottomSheet from './BottomSheet';
import ProfileItem from '../ProfileItem';
import ActionButton from './ActionButton';

interface BottomSheetAlertProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onReject: () => void;
  onAccept: () => void;
}

export default function BottomSheetAlert({ className, isOpen, onClose, onReject = () => {}, onAccept = () => {} }: BottomSheetAlertProps) {
  return (
    <BottomSheet height={'auto'} className={className} isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col gap-2 m-4'>
        {/* 신청 제목 */}
        <div className='w-full text-xl font-bold text-center text-[#1b1b1b]'>00에 참여하고 싶은 00님의 상세정보에요.</div>

        {/* 신청자의 프로필 정보 */}
        <div className='flex justify-center w-full'>
          <ProfileItem />
        </div>

        {/* 신청 내용 */}
        <div className='w-full p-2 border rounded-md border-[#2f7dff]'>
          <div className='text-xs text-left text-[#1b1b1b]'>선배님 메뉴는 정해졌나요?? 찌개로 먹으면 너무 좋을 거 같아요.</div>
        </div>

        {/* 거절 및 수락 버튼 */}
        <div className='flex justify-between gap-2 mt-2'>
          <ActionButton type='reject' onClick={onReject}>
            거절
          </ActionButton>
          <ActionButton type='accept' onClick={onAccept}>
            수락
          </ActionButton>
        </div>
      </div>
    </BottomSheet>
  );
}
