import React, { ReactNode } from 'react';
import BottomSheet from './BottomSheet';
import { usePostFormStore } from '@/stores/post-form';

interface BottomSheetCategorySelectProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetCategorySelect({ className, isOpen, onClose }: BottomSheetCategorySelectProps) {
  const { updateFormData } = usePostFormStore();
  return (
    <BottomSheet height={'200px'} className={`${className} flex flex-col items-center`} isOpen={isOpen} onClose={onClose}>
      <div className='w-380px my-8 text-[24px] font-bold '>카테고리를 선택해주세요</div>
      <div className='flex flex-row gap-4'>
        <div
          onClick={() => {
            updateFormData('category', '밥약');
            onClose();
          }}
          className='w-[100px] h-[50px] flex items-center justify-center rounded-md bg-[#2f7dff] mx-auto cursor-pointer hover:bg-[#2768FF]'
        >
          <p className='text-xl font-bold text-white'>밥약</p>
        </div>
        <div
          onClick={() => {
            updateFormData('category', '술약');
            onClose();
          }}
          className='w-[100px] h-[50px] flex items-center justify-center rounded-md bg-[#2f7dff] mx-auto cursor-pointer hover:bg-[#2768FF]'
        >
          <p className='text-xl font-bold text-white'>술약</p>
        </div>
        <div
          onClick={() => {
            updateFormData('category', '과팅');
            onClose();
          }}
          className='w-[100px] h-[50px] flex items-center justify-center rounded-md bg-[#2f7dff] mx-auto cursor-pointer hover:bg-[#2768FF]'
        >
          <p className='text-xl font-bold text-white'>과팅</p>
        </div>
      </div>
    </BottomSheet>
  );
}
