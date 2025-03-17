import React, { useState } from 'react';
import { useRegisterStore } from '@/stores/register-form';
import { ClearIcon } from '@/assets/icons/SvgIcon';
import MobileCarrierBottomSheet from './MobileCarrierBottomSheet';

export default function RegisterMobileCarrierInput({ label, placeholder }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const store = useRegisterStore();
  const setter = store.setMobileCarrier;
  const value = store.mobileCarrier;

  const handleClear = () => {
    setter('');
  };

  const handleClick = () => {
    setIsBottomSheetOpen(true);
  };

  const mobileCarrierMap = {
    SKT: 'SKT',
    KT: 'KT',
    LGUP: 'LGU+',
  };

  return (
    <>
      <div className='flex flex-col mb-8 cursor-pointer' onClick={handleClick}>
        <label className='text-sm font-medium text-[#ccc] mb-2'>{label}</label>
        <div className='flex items-center justify-between border-b border-[#ccc] pb-2'>
          <div className={`text-xl font-medium w-[340px] ${value ? 'text-[#1b1b1b]' : 'text-[#999999]'}`}>
            {value ? mobileCarrierMap[value] : placeholder}
          </div>
          {value && (
            <div onClick={handleClear} className='cursor-pointer'>
              <ClearIcon />
            </div>
          )}
        </div>
      </div>

      <MobileCarrierBottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} />
    </>
  );
}
