// components/RootComment.tsx
import { ManIcon, WomanIcon } from '@/assets/icons/SvgIcon';
import React from 'react';
import Image from 'next/image';
import profileImage from '@/assets/images/profileImage.png';
import { getTimeAgo } from '@/utils/timeAgo';
import { getRating, getRatingWithStyle } from '@/utils/ratingCalc';

interface CommentProps {
  nickname: string;
  rating: number;
  gender: string;
  department: string;
  studentNumber: string;
  birth: string;
  comment: string;
  child?: [];
  createdAt: string;
}

interface RootCommentProps {
  commentData: CommentProps;
}

export default function RootComment({ commentData }: RootCommentProps) {
  const timeAgo = getTimeAgo(commentData.createdAt);
  const { style, grade } = getRatingWithStyle(commentData.rating);

  return (
    <div className='flex gap-2 w-[380px]'>
      <Image src={profileImage} className='w-[64px] h-[64px] rounded-full object-cover aspect-square' alt='프로필 이미지' />

      <div className='flex-col'>
        {/* 상단 사용자 정보 */}
        <div className='flex items-center gap-2'>
          <div className='text-base font-bold text-[#1b1b1b]'>{commentData.nickname}</div>
          <div className='flex items-center justify-center h-3 px-1 rounded-sm' style={{ backgroundColor: `${style.color}20` }}>
            <span className='text-[10px] font-medium' style={{ color: style.textColor }}>
              {grade}
            </span>
          </div>
          {commentData.gender === 'MAN' ? <ManIcon className='w-3 h-3' /> : <WomanIcon className='w-3 h-3' />}
          <p className='text-xs font-medium text-[#999]'>{timeAgo}</p>
        </div>

        {/* 학과/학번/년생 정보 */}
        <div className='flex gap-1 mb-2'>
          <p className='text-xs font-bold text-[#1b1b1b]'>{commentData.department}</p>
          <p className='text-xs font-bold text-[#1b1b1b]'>{`${commentData.studentNumber}학번`}</p>
          <p className='text-xs font-bold text-[#1b1b1b]'>{commentData.birth ? `${commentData.birth.slice(2, 4)}년생` : ''}</p>
        </div>

        {/* 댓글 내용 */}
        <p className='text-xs font-medium text-[#1b1b1b] mb-1'>{commentData.comment}</p>

        {/* 답글 달기 버튼 */}
        <p onClick={() => {}} className='w-12 text-xs font-medium text-[#999] cursor-pointer'>
          답글 달기
        </p>
      </div>
    </div>
  );
}
