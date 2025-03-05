import React, { useState } from 'react';
import { useRegisterStore } from '@/stores/register-form';
import { ClearIcon } from '@/assets/icons/SvgIcon';
import GenderBottomSheet from './GenderBottomSheet';

export default function RegisterSelectInput({ label, placeholder, storeKey }) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const store = useRegisterStore();
  const setterMap = {
    university: store.setUniversity,
    department: store.setDepartment,
    studentNumber: store.setStudentNumber,
    nickname: store.setNickname,
    birth: store.setBirth,
    gender: store.setGender,
    phone: store.setPhone,
    mobileCarrier: store.setMobileCarrier,
    verification: store.setVerification,
  };

  const value = store[storeKey];
  const setter = setterMap[storeKey];

  const handleClear = () => {
    setter('');
  };

  const handleClick = () => {
    if (storeKey === 'gender') {
      setIsBottomSheetOpen(true);
    }
  };

  const genderMap = {
    MAN: '남성',
    WOMAN: '여성',
  };

  return (
    <>
      <div className='flex flex-col mb-8 cursor-pointer' onClick={handleClick}>
        <label className='text-sm font-medium text-[#ccc] mb-2'>{label}</label>
        <div className='flex items-center justify-between border-b border-[#ccc] pb-2'>
          <div className={`text-xl font-medium w-[340px] ${value ? 'text-[#1b1b1b]' : 'text-[#999999]'}`}>
            {storeKey === 'gender' && value ? genderMap[value] : value || placeholder}
          </div>
          {value && (
            <div onClick={handleClear} className='cursor-pointer'>
              <ClearIcon />
            </div>
          )}
        </div>
      </div>

      {storeKey === 'gender' && <GenderBottomSheet isOpen={isBottomSheetOpen} onClose={() => setIsBottomSheetOpen(false)} />}
    </>
  );
}
