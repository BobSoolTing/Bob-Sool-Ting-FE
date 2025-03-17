import React from 'react';
import { PlaceIcon, DateIcon, PersonnelIcon, BobSoolTingIcon } from '@/assets/icons/SvgIcon';
import { BottomSheetType, usePostFormStore } from '@/stores/post-form';

interface PostFormFieldsProps {
  onFieldClick: (type: BottomSheetType) => void;
}

const PostFormFields: React.FC<PostFormFieldsProps> = ({ onFieldClick }) => {
  const { formData } = usePostFormStore();
  return (
    <div className='flex flex-col w-full space-y-4 mb-4'>
      <div onClick={() => onFieldClick('place')} className='flex items-center h-5 cursor-pointer'>
        <PlaceIcon className='mr-2' />
        <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.location}</div>
      </div>

      <div onClick={() => onFieldClick('date')} className='flex items-center h-5 cursor-pointer'>
        <DateIcon className='mr-2' />
        <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.date}</div>
      </div>

      <div onClick={() => onFieldClick('personnel')} className='flex items-center h-5 cursor-pointer'>
        <PersonnelIcon className='mr-2' />
        {formData.max_participants === 999 ? (
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>인원 수를 선택해 주세요</div>
        ) : (
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.max_participants}인</div>
        )}
      </div>

      <div onClick={() => onFieldClick('category')} className='flex items-center h-5 cursor-pointer'>
        <BobSoolTingIcon className='mr-2 w-4 h-4' />
        {formData.category === 'FOOD' ? (
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>밥약</div>
        ) : formData.category === 'DRINK' ? (
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>술약</div>
        ) : formData.category === 'MEETING' ? (
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>과팅</div>
        ) : (
          <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>카테고리를 선택해 주세요</div>
        )}
      </div>
    </div>
  );
};

export default PostFormFields;
