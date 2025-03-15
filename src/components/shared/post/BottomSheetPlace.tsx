import React, { ReactNode, useEffect, useState } from 'react';
import BottomSheet from './BottomSheet';
import { usePostFormStore } from '@/stores/post-form';
import Button from '../Button';

interface BottomSheetPlaceProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetPlace({ isOpen, onClose }: BottomSheetPlaceProps) {
  const { formData, updateFormData } = usePostFormStore();
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    if (formData.location) {
      setIsComplete(true);
    }
  }, [formData.location]);
  return (
    <BottomSheet height={'300px'} isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col items-center w-full h-full'>
        <div className='text-xl font-bold mt-4'>만남 장소를 입력해 주세요</div>
        <input
          className='w-[348px] mt-12 text-[16px] font-bold text-center text-[#1b1b1b] border-0 focus:outline-none placeholder:text-[#999]'
          type='text'
          placeholder='예 : 강남역'
          onChange={(e) => {
            updateFormData('location', e.target.value);
          }}
        />
      </div>
      <div className='absolute bottom-4 left-0 right-0 flex justify-center'>
        <Button
          isComplete={isComplete}
          onClick={() => {
            if (isComplete) onClose();
          }}
        >
          완료
        </Button>
      </div>
    </BottomSheet>
  );
}
