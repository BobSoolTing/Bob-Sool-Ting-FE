import React, { useState } from 'react';
import BottomSheet from '@/components/shared/post/BottomSheet';
import { useRegisterStore } from '@/stores/register-form';

interface GenderBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GenderBottomSheet({ isOpen, onClose }: GenderBottomSheetProps) {
  const { setGender } = useRegisterStore();
  const [selectedGender, setSelectedGender] = useState<'MAN' | 'WOMAN' | null>(null);

  const handleGenderSelect = (gender: 'MAN' | 'WOMAN') => {
    setGender(gender);
    setSelectedGender(gender);
    onClose();
  };

  const getGenderItemClass = (gender: 'MAN' | 'WOMAN') => {
    const baseClasses = 'py-4 border-b last:border-b-0 cursor-pointer text-lg';
    const hoverClass = 'hover:text-[#2F7DFF]';
    const selectedClass = selectedGender === gender ? 'text-[#2768FF]' : 'text-[#1B1B1B]';

    return `${baseClasses} ${hoverClass} ${selectedClass}`;
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} height='240px'>
      <div className='px-5 pt-6'>
        <h2 className='text-xl font-bold text-[#1b1b1b] mb-6 text-left'>성별을 선택해주세요</h2>
        <div className='space-y-4'>
          <div onClick={() => handleGenderSelect('MAN')} className={getGenderItemClass('MAN')}>
            남성
          </div>
          <div onClick={() => handleGenderSelect('WOMAN')} className={getGenderItemClass('WOMAN')}>
            여성
          </div>
        </div>
      </div>
    </BottomSheet>
  );
}
