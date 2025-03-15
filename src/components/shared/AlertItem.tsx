import React, { useState } from 'react';
import { DeleteButtonIcon, ProfileIcon, DeleteIcon } from '@/assets/icons/SvgIcon';
import { IAlert } from '@/types/types';
import BottomSheetAlert from './post/BottomSheetAlert';

// 알림 아이템 props 타입 정의
interface AlertItemProps {
  alert: IAlert;
  isSlide: boolean; // 삭제 영역 열림 및 닫힘
  onDeleteOpen: () => void; // 삭제 영역 열기
  onDelete: () => void; // 알림 삭제
  onClose: () => void;
}

export default function AlertItem({ alert, isSlide, onDeleteOpen, onDelete }: AlertItemProps) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  if (!alert) return null; // alert가 undefined일 경우 아무 것도 렌더링하지 않음

  // 알림 타입에 따라 바텀 시트 또는 페이지 이동
  const handleAlertAction = () => {
    // Apply 타입이면 바텀 시트 열기
    if (alert.type === 'Apply') {
      setIsBottomSheetOpen(true);
      // Accept, Reject 타입이면 상세 페이지로 이동
    } else if (alert.type === 'Accept') {
      window.location.href = `/detail/${alert.postId}`;
    } else if (alert.type === 'Reject') {
      window.location.href = `/detail/${alert.postId}`;
      // Like, Comment 타입이면 받은 페이지로 이동
    } else {
      window.location.href = `${alert.postId}`;
    }
  };

  return (
    <>
      <div
        className='w-[412px] h-[106px] flex items-center justify-between bg-white border-b border-[#d9d9d9] px-4 relative overflow-hidden cursor-pointer'
        onClick={handleAlertAction}
      >
        {/* 슬라이드될 영역 */}
        <div
          className={`flex items-center justify-between w-full transition-transform duration-300 ${isSlide ? 'transform translate-x-[-72px]' : ''}`}
        >
          {/* 프로필 아이콘 + 텍스트 알림 아이템 */}
          <div className='flex items-center gap-3'>
            <ProfileIcon />
            <div className='flex w-[264px] min-h-[74px] flex-col gap-2'>
              <p className='text-base font-bold text-[#1b1b1b]'>{alert.postId}</p>
              <p className='text-xs font-medium text-[#1b1b1b] flex-grow line-clamp-2'>{alert.content}</p>
              <p className='text-[10px] font-medium text-[#767676]'>{alert.createdAt}</p>
            </div>
          </div>

          {/* 삭제 영역 열기 버튼 */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onDeleteOpen();
            }}
            className='self-start cursor-pointer'
          >
            <DeleteButtonIcon />
          </div>
        </div>

        {/* 삭제 영역 */}
        <div
          className={`absolute top-0 right-0 w-[72px] h-full bg-[#FF2A2A]/70 hover:bg-[#FF2A2A] flex flex-col justify-center items-center gap-1 transition-all duration-300 ${
            isSlide ? 'transform translate-x-0' : 'transform translate-x-[72px]'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <DeleteIcon />
          <p className='text-xs font-bold text-white'>삭제</p>
        </div>
      </div>

      {/* 바텀 시트 */}
      <BottomSheetAlert isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} onAccept={() => {}} onReject={() => {}} />
    </>
  );
}
