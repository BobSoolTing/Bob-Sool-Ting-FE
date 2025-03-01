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
        <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.place}</div>
      </div>

      <div onClick={() => onFieldClick('date')} className='flex items-center h-5 cursor-pointer'>
        <DateIcon className='mr-2' />
        <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.date}</div>
      </div>

      <div onClick={() => onFieldClick('personnel')} className='flex items-center h-5 cursor-pointer'>
        <PersonnelIcon className='mr-2' />
        <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.personnel}</div>
      </div>
      <div onClick={() => onFieldClick('category')} className='flex items-center h-5 cursor-pointer'>
        <BobSoolTingIcon className='mr-2 w-4 h-4' />
        <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>{formData.category}</div>
      </div>
    </div>
  );
};

export default PostFormFields;
