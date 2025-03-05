import React, { useState } from 'react';
import { useRegisterStore } from '@/stores/register-form';
import { ClearIcon } from '@/assets/icons/SvgIcon';
import { validateUniversity, validateDepartment, validateStudentNumber, validateNickname, validateBirth } from '@/utils/validations';
import { formatBirth, formatPhoneNumber } from '@/utils/formatters';

export default function RegisterInput({ label, placeholder, type = 'text', storeKey, width = 'w-full' }: RegisterInputProps) {
  const store = useRegisterStore();
  const [error, setError] = useState('');

  const setterMap = {
    university: store.setUniversity,
    department: store.setDepartment,
    studentNumber: store.setStudentNumber,
    nickname: store.setNickname,
    birth: store.setBirth,
    phone: store.setPhone,
    verification: store.setVerification,
  };

  const validationMap = {
    university: validateUniversity,
    department: validateDepartment,
    studentNumber: validateStudentNumber,
    nickname: validateNickname,
    birth: validateBirth,
  };

  const formatterMap = {
    birth: formatBirth,
    phone: formatPhoneNumber,
  };

  const value = store[storeKey];
  const setter = setterMap[storeKey];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 포매터 적용 (birth, phone에 한해)
    const formattedValue = formatterMap[storeKey] ? formatterMap[storeKey](inputValue) : inputValue;

    setter(formattedValue);

    // 유효성 검사 로직 추가
    if (validationMap[storeKey]) {
      const validation = validationMap[storeKey](formattedValue);
      setError(validation.isValid ? '' : validation.errorMessage);
    }
  };

  const handleClear = () => {
    setter('');
    setError('');
  };

  return (
    <div className={`flex flex-col mb-8 ${width}`}>
      <label className='text-sm font-medium text-[#ccc] mb-2'>{label}</label>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between border-b border-[#ccc] pb-2'>
          <input
            type={type}
            value={value}
            onChange={handleChange}
            className={`text-xl font-medium text-[#1b1b1b] w-full outline-none focus:border-none focus:outline-none`}
            placeholder={placeholder}
          />
          {value && (
            <div onClick={handleClear} className='cursor-pointer'>
              <ClearIcon />
            </div>
          )}
        </div>
        {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
    </div>
  );
}
