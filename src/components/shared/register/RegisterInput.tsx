import React from 'react';
import { useRegisterStore } from '@/stores/register-form';
import { ClearIcon } from '@/assets/icons/SvgIcon';

export default function RegisterInput({ label, placeholder, type = 'text', storeKey }) {
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

  return (
    <div className='flex flex-col mb-8'>
      <label className='text-sm font-medium text-[#ccc] mb-2'>{label}</label>
      <div className='flex items-center justify-between border-b border-[#ccc] pb-2'>
        <input
          type={type}
          value={value}
          onChange={(e) => setter(e.target.value)}
          className='text-xl font-medium text-[#1b1b1b] w-[300px] outline-none focus:border-none focus:outline-none'
          placeholder={placeholder}
        />
        {value && (
          <div onClick={handleClear} className='cursor-pointer'>
            <ClearIcon />
          </div>
        )}
      </div>
    </div>
  );
}
