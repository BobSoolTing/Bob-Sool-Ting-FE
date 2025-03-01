import React from 'react';

// 제목 입력 컴포넌트
export default function TitleInput({ updateFormData }: { updateFormData: (field: string, value: string) => void }) {
  return (
    <div className='w-full h-14 mb-4'>
      <input
        className='text-2xl font-bold text-[#1b1b1b] border-0 focus:outline-none placeholder:text-[#999]'
        placeholder='제목을 작성해 주세요'
        onChange={(e) => updateFormData('title', e.target.value)}
      />
    </div>
  );
}
