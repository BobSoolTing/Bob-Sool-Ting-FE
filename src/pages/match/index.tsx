import React from 'react';
import { ReactNode } from 'react';
import { MatchedIcon, CopyIcon } from '@/assets/icons/SvgIcon';
import ProfileItem from '@/components/shared/ProfileItem';
import BottomBar from '@/components/shared/bst/BottomBar';
import Button from '@/components/shared/Button';

export default function MatchedPage() {
  const details = [
    { label: '모집글', value: '밥약 하실 후배님을 찾습니다.' },
    { label: '장소', value: '인천광역시 연수구 송도동' },
    { label: '날짜', value: '2025. 05. 10. (수)' },
    { label: '인원', value: '2인' },
    { label: '연락처', value: '010 - 0000 - 0000' },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='w-[380px] h-40 flex flex-col items-center justify-center text-center mx-4 mt-12 mb-8'>
        <MatchedIcon />
        <p className='text-2xl font-bold text-[#1b1b1b] pt-2'>밥약 매칭이 완료되었습니다!</p>
        <p className='text-xl text-[#1b1b1b]'>
          아래의 <span className='font-bold text-[#2768ff]'>연락처</span>를 통해 일정을 조율해 보세요.
        </p>
      </div>
      <div className='flex flex-col w-[380px] h-[452px] rounded-md bg-[#f7f7f8] pt-4 px-4 mx-4'>
        <div className='pb-4 border-b-2 dorder-[#eee]'>
          <div className='flex w-full'>
            <ProfileItem />
          </div>
        </div>
        {details.map((item, index) => (
          <div key={index} className={`flex px-2 py-4 ${index !== details.length - 1 ? 'border-b border-[#eee]' : ''}`}>
            <p className='h-4 text-base text-[#767676] flex items-center'>{item.label}</p>
            {item.label === '연락처' ? (
              <div className='flex ml-auto items-center'>
                <p className='h-4 text-base text-[#2768ff] flex items-center mr-1'>{item.value}</p>
                <CopyIcon />
              </div>
            ) : (
              <p className='h-4 text-base text-[#1b1b1b] ml-auto flex items-center'>{item.value}</p>
            )}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center py-4'>
        <p className='w-[328px] text-base font-medium text-center text-[#999]'>다른 참여자의 프로필 정보가 궁금하신가요?</p>
      </div>
      <div className='pt-16'>
        <Button>확인</Button>
      </div>
    </div>
  );
}

MatchedPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
