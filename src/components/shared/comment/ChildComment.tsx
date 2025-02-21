import React from 'react';
import profileImage from '@/assets/images/profileImage.png';
import Image from 'next/image';
import { WomanIcon } from '@/assets/icons/SvgIcon';

const commentData = {
  nickname: '수지',
  rating: 50,
  gender: 'WOMAN',
  department: '연극영화학과', // 학과
  studentNumber: 25, // 학번
  birth: '2006-10-03', // 출생 연월일
  comment:
    '안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. ',
  cratedAt: '2024-02-20',
};

export default function ChildComment() {
  return (
    <div className='w-[380px] flex gap-2 mx-auto my-0'>
      <Image src={profileImage} height={48} width={48} alt='프로필 이미지' className='w-12 h-12 rounded-full' />

      <div className='flex flex-col gap-2'>
        {/* 상단 정보 영역 */}
        <div className='flex items-center gap-2'>
          <span className='text-base font-bold'>{commentData.nickname}</span>
          <div className='flex items-center justify-center h-3 px-1 rounded-sm bg-[#4a90e2]/20'>
            <span className='text-[10px] font-medium text-[#767676]'>{commentData.rating}</span>
          </div>
          <WomanIcon className='w-3 h-3' />
          <span className='text-xs font-medium text-[#999]'>1시간 전</span>
        </div>

        {/* 학과 정보 영역 */}
        <div className='flex gap-2 text-xs font-bold text-[#1b1b1b]'>
          <span>연극영화학과</span>
          <span>25학번</span>
          <span>06년생</span>
        </div>

        {/* 댓글 내용 */}
        <p className='text-xs font-medium text-black'>시간대 괜찮은데 메뉴는 정해졌나요? 저는 찌개 좋아해요! 😊</p>
      </div>
    </div>
  );
}
