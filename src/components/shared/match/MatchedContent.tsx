import React, { useState } from 'react';
import ProfileItem from '../ProfileItem';
import { CopyIcon } from '@/assets/icons/SvgIcon';
import BottomSheet from '@/components/shared/post/BottomSheet';
import Button from '../Button';
import Image from 'next/image';

interface Profile {
  id: number;
  name: string;
  imageUrl: string;
}

const sampleProfiles: Profile[] = [
  {
    id: 1,
    name: '홍길동',
    imageUrl: 'https://via.placeholder.com/70',
  },
  {
    id: 2,
    name: '김철수',
    imageUrl: 'https://via.placeholder.com/70',
  },
];

export default function MatchedContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const details = [
    { label: '모집글', value: '밥약 하실 후배님을 찾습니다.' },
    { label: '장소', value: '인천광역시 연수구 송도동' },
    { label: '날짜', value: '2025. 05. 10. (수)' },
    { label: '인원', value: '3인' },
    { label: '연락처', value: '010 - 0000 - 0000' },
  ];

  const memberCount = parseInt(details.find((item) => item.label === '인원')?.value.replace(/\D/g, '') || '0');

  const handleCopy = (text: string) => {
    const cleanedText = text.replace(/\s/g, '');

    navigator.clipboard.writeText(cleanedText).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      },
      (err) => {
        console.error('복사 실패:', err);
      }
    );
  };

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile); // 선택한 프로필 저장
  };

  const handleClose = () => {
    if (selectedProfile) {
      setSelectedProfile(null); // 상세정보 닫기 → 프로필 목록으로 돌아가기
    } else {
      setIsOpen(false); // 목록 바텀시트 닫기
    }
  };

  return (
    <>
      <div className='flex flex-col w-[380px] h-[452px] rounded-md bg-[#f7f7f8] pt-4 px-4 mx-4'>
        <div className='pb-4 border-b-2 dorder-[#eee]'>
          <div className='flex w-full'>
            <ProfileItem />
          </div>
        </div>
        {details.map((item, index) => (
          <div key={index} className={`flex px-2 py-4 ${index !== details.length - 1 ? 'border-b border-[#eee]' : ''}`}>
            <span className='h-4 text-base text-[#767676] flex items-center'>{item.label}</span>
            {item.label === '연락처' ? (
              <div className='flex ml-auto items-center cursor-pointer' onClick={() => handleCopy(item.value)}>
                <span className='h-4 text-base text-[#2768ff] flex items-center mr-1'>{item.value}</span>
                <CopyIcon className='cursor-pointer' />
                {copySuccess && (
                  <div className='fixed top-[750px] left-1/2 transform -translate-x-1/2 bg-[#2768ff] text-white px-4 py-2 rounded-md text-lg font-semibold shadow-lg'>
                    복사됨!
                  </div>
                )}
              </div>
            ) : (
              <span className='h-4 text-base text-[#1b1b1b] ml-auto flex items-center'>{item.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* 인원 수가 3명 이상일 때만 텍스트 표시 */}
      {memberCount >= 3 && (
        <div className='flex items-center justify-center py-4'>
          <p
            onClick={() => setIsOpen(true)} // 텍스트 클릭 시 바텀시트 열기
            className='w-[328px] text-base font-medium text-center text-[#999] cursor-pointer'
          >
            다른 참여자의 프로필 정보가 궁금하신가요?
          </p>
        </div>
      )}

      {/* BottomSheet 컴포넌트 */}
      <BottomSheet isOpen={isOpen} onClose={handleClose} height={selectedProfile ? '340px' : '238px'}>
        <div className='p-4'>
          {selectedProfile ? (
            // 선택한 프로필 상세 정보
            <div className='flex flex-col items-center'>
              <span className='text-xl font-bold text-[#1b1b1b]'>모임 참가자인 {selectedProfile.name}님의 상세정보에요.</span>
              <div className='mt-4 mb-8'>
                <ProfileItem />
              </div>
            </div>
          ) : (
            // 프로필 목록
            <>
              <span className='text-xl font-bold text-[#1b1b1b]'>00에 참여한 인원들의 프로필이에요.</span>
              <div className='flex pt-4 gap-4'>
                {sampleProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className='flex flex-col items-center cursor-pointer'
                    onClick={() => handleProfileClick(profile)} // 클릭 시 상세정보 전환
                  >
                    <Image src={profile.imageUrl} alt='Profile' className='w-[70px] h-[70px] rounded-full' />
                    <span className='text-base font-bold mt-[6px]'>{profile.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <Button isComplete={true} onClick={handleClose}>
          닫기
        </Button>
      </BottomSheet>
    </>
  );
}
