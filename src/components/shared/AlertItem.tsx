import React, { useState } from 'react';
import { ReactNode } from 'react';
import { DeleteButtonIcon, ProfileIcon, DeleteIcon } from '@/assets/icons/SvgIcon';

interface AlertProps {
  children: ReactNode;
}

export default function AlertItem({ children }: AlertProps) {
  const [isSlide, setIsSlide] = useState(false); // 슬라이드 상태

  const handleDeleteOpen = () => {
    setIsSlide(!isSlide); // 클릭 시 슬라이드 상태 변경
  };

  return (
    <div className='w-[412px] h-[106px] flex items-center justify-between bg-white border-b border-[#d9d9d9] px-4 relative overflow-hidden'>
      {/* 슬라이드 될 영역 */}
      <div className={`flex items-center justify-between w-full transition-transform duration-300 ${isSlide ? 'transform translate-x-[-72px]' : ''}`}>
        {/* 프로필 아이콘 + 텍스트 컨테이너 */}
        <div className='flex items-center gap-3'>
          <ProfileIcon />
          <div className='flex w-[264px] min-h-[74px] flex-col gap-2'>
            <p className='text-base font-bold text-[#1b1b1b]'>밥약 하실 후배님을 찾습니다.</p>
            <p className='text-xs font-medium text-[#1b1b1b] flex-grow line-clamp-2'>내용을 작성하지 않았습니다</p>
            <p className='text-[10px] font-medium text-[#767676]'>25. 04. 30</p>
          </div>
        </div>

        {/* 삭제 영역 열기 */}
        <div onClick={handleDeleteOpen} className='self-start'>
          <DeleteButtonIcon />
        </div>
      </div>

      {/* 삭제 영역 */}
      <div
        className={`absolute top-0 right-0 w-[72px] h-full bg-[#FF2A2A]/70 flex flex-col justify-center items-center gap-1 transition-all duration-300 ${
          isSlide ? 'transform translate-x-0' : 'transform translate-x-[72px]'
        }`}
      >
        <DeleteIcon />
        <p className='text-xs font-bold text-white'>삭제</p>
      </div>
    </div>
  );
}
