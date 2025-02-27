// components/post/PostFormFields.tsx
import React from 'react';
import { PlaceIcon, DateIcon, PersonnelIcon } from '@/assets/icons/SvgIcon';
import { BottomSheetType } from '@/hooks/usePostForm';

interface PostFormFieldsProps {
  onFieldClick: (type: BottomSheetType) => void;
}

// 필드 항목 인터페이스 정의
interface FieldItem {
  type: BottomSheetType;
  icon: React.ReactNode;
  placeholder: string;
}

const PostFormFields: React.FC<PostFormFieldsProps> = ({ onFieldClick }) => {
  // 필드 항목 정의
  const fieldItems: FieldItem[] = [
    { type: 'place', icon: <PlaceIcon className='mr-2' />, placeholder: '만남 장소를 입력해 주세요' },
    { type: 'date', icon: <DateIcon className='mr-2' />, placeholder: '약속 날짜를 선택해 주세요' },
    { type: 'personnel', icon: <PersonnelIcon className='mr-2' />, placeholder: '인원 수를 선택해 주세요' },
  ];

  return (
    <div className='flex flex-col w-full space-y-4 mb-4'>
      {fieldItems.map((item) => (
        <div key={item.type} onClick={() => onFieldClick(item.type)} className='flex items-center h-5 cursor-pointer'>
          {item.icon}
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{item.placeholder}</div>
        </div>
      ))}
    </div>
  );
};

export default PostFormFields;
