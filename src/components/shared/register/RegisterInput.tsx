import React, { useState } from 'react';
import { useRegisterStore } from '@/stores/register-form';
import { ClearIcon } from '@/assets/icons/SvgIcon';
import { validateUniversity, validateDepartment, validateStudentNumber, validateNickname, validateBirth } from '@/utils/validations';
import { formatBirth, formatPhoneNumber } from '@/utils/formatters';

// 타입 정의 추가
type StoreKey = 'university' | 'department' | 'studentNumber' | 'nickname' | 'birth' | 'phone' | 'verification';

interface RegisterInputProps {
  label: string;
  placeholder: string;
  type?: string;
  storeKey: StoreKey;
  width?: string;
}

export default function RegisterInput({ label, placeholder, type = 'text', storeKey, width = 'w-full' }: RegisterInputProps) {
  const store = useRegisterStore();
  const [error, setError] = useState('');

  // 타입 안전한 setter map 생성
  const setterMap = {
    university: store.setUniversity,
    department: store.setDepartment,
    studentNumber: store.setStudentNumber,
    nickname: store.setNickname,
    birth: store.setBirth,
    phone: store.setPhone,
    verification: (value: string) => store.setVerification(Number(value)),
  };

  const validationMap: Partial<Record<StoreKey, (value: string) => { isValid: boolean; errorMessage: string }>> = {
    university: validateUniversity,
    department: validateDepartment,
    studentNumber: validateStudentNumber,
    nickname: validateNickname,
    birth: validateBirth,
  };

  const formatterMap: Partial<Record<StoreKey, (value: string) => string>> = {
    birth: formatBirth,
    phone: formatPhoneNumber,
  };

  // 타입 단언을 사용하여 값 가져오기
  const value = store[storeKey as keyof typeof store];
  const setter = setterMap[storeKey];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // 포매터 적용 (birth, phone에 한해)
    const formattedValue = formatterMap[storeKey] ? formatterMap[storeKey]!(inputValue) : inputValue;

    // verification인 경우와 아닌 경우 분리 처리
    if (storeKey === 'verification') {
      (setter as (value: string) => void)(formattedValue);
    } else {
      (setter as (value: string) => void)(formattedValue);
    }

    // 유효성 검사 로직 추가
    if (validationMap[storeKey]) {
      const validation = validationMap[storeKey]!(formattedValue);
      setError(validation.isValid ? '' : validation.errorMessage);
    }
  };

  const handleClear = () => {
    if (storeKey === 'verification') {
      (setter as (value: string) => void)('');
    } else {
      (setter as (value: string) => void)('');
    }
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
