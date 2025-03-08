import { ManIcon, WomanIcon } from '@/assets/icons/SvgIcon';
import React from 'react';
import Image from 'next/image';
import profileImage from '@/assets/images/profileImage.png';
import { getTimeAgo } from '@/utils/timeAgo';
import { getRatingWithStyle } from '@/utils/ratingCalc';
import ChildComment from '@/components/shared/post/ChildComment'; // ChildComment를 임포트

export interface CommentProps {
  nickname: string;
  rating: number;
  gender: string;
  department: string;
  studentNumber: string;
  birth: string;
  comment: string;
  child?: CommentProps[]; // 자식 댓글도 포함된 배열로 수정
  createdAt: string;
}

interface RootCommentProps {
  commentData: CommentProps;
}

export default function RootComment({ commentData }: RootCommentProps) {
  const timeAgo = getTimeAgo(commentData.createdAt);
  const { style, grade } = getRatingWithStyle(commentData.rating);

  return (
    <div className='mb-4'>
      <div className='flex flex-row gap-2 w-full'>
        <Image src={profileImage} className='w-[64px] h-[64px] rounded-full object-cover aspect-square' alt='프로필 이미지' />

        <div className='flex-col w-full mb-2'>
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
      {/* 자식 댓글들 렌더링 */}
      {commentData.child && commentData.child.length > 0 && (
        <div className='ml-8'>
          {commentData.child.map((childComment, index) => (
            <ChildComment key={index} commentData={childComment} />
          ))}
        </div>
      )}
    </div>
  );
}
