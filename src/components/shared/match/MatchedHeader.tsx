import React from 'react';
import { MatchedIcon } from '@/assets/icons/SvgIcon';

export default function MatchedHeader() {
  return (
    <div className='w-[380px] h-40 flex flex-col items-center justify-center text-center mx-4 mt-12 mb-8'>
      <MatchedIcon />
      <p className='text-2xl font-bold text-[#1b1b1b] pt-2'>밥약 매칭이 완료되었습니다!</p>
      <p className='text-xl text-[#1b1b1b]'>
        아래의 <span className='font-bold text-[#2768ff]'>연락처</span>를 통해 일정을 조율해 보세요.
      </p>
    </div>
  );
}
