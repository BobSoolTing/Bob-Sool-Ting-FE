import React from 'react';
import Image from 'next/image';
import profileImage from '@/assets/images/profileImage.png';
import { ManIcon, WomanIcon, HeartIcon } from '@/assets/icons/SvgIcon';
import { getRatingWithStyle } from '@/utils/ratingCalc';
import { getTimeAgo } from '@/utils/timeAgo';
import { IPostDetail, usePostDetailStore } from '@/stores/post-detail';

const PostProfile = ({ postDetail }: { postDetail: IPostDetail }) => {
  const { grade, style } = getRatingWithStyle(postDetail.rating);
  const birthYear = postDetail.birth.substring(2, 4);
  const time = getTimeAgo(postDetail.createdAt);
  const { incrementLikeCount } = usePostDetailStore();

  return (
    <div className='w-full flex items-center'>
      {/* 프로필 이미지 */}
      <div className='flex-shrink-0 mr-6'>
        <Image width={50} height={50} className='rounded-full' src={profileImage} alt='프로필 사진' />
      </div>

      {/* 유저 정보 */}
      <div className='flex flex-col flex-grow'>
        <div className='flex items-center mb-1'>
          <p className='text-base font-bold text-[#1b1b1b] mr-2'>{postDetail.nickname}</p>
          <div className='flex items-center mr-2'>
            <div className='w-[26px] h-3 rounded-sm flex justify-center items-center' style={{ backgroundColor: `${style.color}20` }}>
              <p className='text-[10px] font-medium' style={{ color: style.textColor }}>
                {grade}
              </p>
            </div>
          </div>
          {postDetail.gender === 'MAN' ? <ManIcon className='w-[12px] h-[12px]' /> : <WomanIcon className='w-[12px] h-[12px]' />}
          <p className='text-xs font-medium text-[#999] ml-2'>{time}</p>
        </div>
        <p className='text-sm font-medium text-[#999]'>{`${postDetail.department} ${postDetail.studentNumber}학번 ${birthYear}년생`}</p>
      </div>

      {/* 좋아요 아이콘 */}
      <div
        onClick={() => {
          incrementLikeCount();
        }}
        className='flex flex-col items-center justify-center h-full cursor-pointer'
      >
        <HeartIcon className='w-4 h-4 mb-1' />
        <p className='text-xs font-bold text-[#999]'>{postDetail.likeCount}</p>
      </div>
    </div>
  );
};

export default PostProfile;
