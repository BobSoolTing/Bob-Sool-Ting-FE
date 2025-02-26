import React, { ReactNode } from 'react';
import Button from '@/components/shared/Button';

interface BottomSheetPlaceProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetPlace({ className, children, isOpen, onClose }: BottomSheetPlaceProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-end z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      {/* 뒷배경 */}
      <div className='absolute w-[412px] h-full bg-[#1b1b1b] bg-opacity-50' onClick={onClose}></div>

      {/* 바텀시트 */}
      <div
        className={`relative max-w-[412px] w-full h-[354px] rounded-t-xl bg-[#ffffff] z-10 transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
