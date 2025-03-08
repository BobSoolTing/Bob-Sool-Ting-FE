import React from 'react';
import profileImage from '@/assets/images/profileImage.png';
import Image from 'next/image';
import { ManIcon, WomanIcon } from '@/assets/icons/SvgIcon';
import { CommentProps } from './RootComment';
import { getTimeAgo } from '@/utils/timeAgo';

export default function ChildComment({ commentData }: { commentData: CommentProps }) {
  const timeAgo = getTimeAgo(commentData.createdAt);
  return (
    <div className='w-full flex gap-2 mb-2'>
      <Image src={profileImage} height={48} width={48} alt='프로필 이미지' className='w-12 h-12 rounded-full' />

      <div className='flex flex-col gap-2'>
        {/* 상단 정보 영역 */}
        <div className='flex items-center gap-2'>
          <span className='text-base font-bold'>{commentData.nickname}</span>
          <div className='flex items-center justify-center h-3 px-1 rounded-sm bg-[#4a90e2]/20'>
            <span className='text-[10px] font-medium text-[#767676]'>{commentData.rating}</span>
          </div>
          {commentData.gender === 'MAN' ? <ManIcon className='w-3 h-3' /> : <WomanIcon className='w-3 h-3' />}
          <span className='text-xs font-medium text-[#999]'>{timeAgo}</span>
        </div>

        {/* 학과 정보 영역 */}
        <div className='flex gap-2 text-xs font-bold text-[#1b1b1b]'>
          <span>{commentData.department}</span>
          <span>{commentData.studentNumber}학번</span>
          <span>{commentData.birth ? commentData.birth.slice(2, 4) + '년생' : ''}</span>
        </div>

        {/* 댓글 내용 */}
        <p className='text-xs font-medium text-black'>{commentData.comment}</p>
      </div>
    </div>
  );
}
