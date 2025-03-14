import React, { ReactNode, useState } from 'react';
import BottomSheet from './BottomSheet';
import { AddIcon, SubtractIcon } from '@/assets/icons/SvgIcon';
import { usePostFormStore } from '@/stores/post-form';
import Button from '../Button';

interface BottomSheetPersonnelProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheetPersonnel({ className, isOpen, onClose }: BottomSheetPersonnelProps) {
  const [personnel, setPersonnel] = useState(+1);
  const { updateFormData } = usePostFormStore();

  const onClickButton = () => {
    updateFormData('max_participants', personnel);
    onClose();
  };
  return (
    <BottomSheet height={'224px'} className={className} isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col items-center w-full rounded-t-xl bg-white border-t border-[#d9d9d9]'>
        <div className='py-4'>
          <p className='text-xl font-bold text-[#1b1b1b]'>인원을 선택해주세요</p>
        </div>

        <div className='flex items-center justify-center gap-8 py-6'>
          <div
            onClick={() => {
              if (personnel > 1) setPersonnel(personnel - 1);
            }}
            className='cursor-pointer'
          >
            <SubtractIcon />
          </div>
          <p className='text-3xl font-bold text-[#1b1b1b]'>{personnel}</p>
          <div
            onClick={() => {
              setPersonnel(personnel + 1);
            }}
            className='cursor-pointer'
          >
            <AddIcon />
          </div>
        </div>
      </div>
      <Button isComplete={true} onClick={onClickButton}>
        완료
      </Button>
    </BottomSheet>
  );
}
