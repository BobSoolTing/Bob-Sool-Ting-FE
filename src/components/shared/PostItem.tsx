import React, { useMemo } from 'react';
import Link from 'next/link';
import { ManIcon, WomanIcon, PlaceIcon, DateIcon, LikeIcon, CommentIcon, ViewIcon } from '@/assets/icons/SvgIcon';
import { getRatingWithStyle } from '@/utils/ratingCalc';

// 임시 데이터
const MOCK_DATA = {
  post: {
    _id: '1234567890',
    title: '밥약하실 후배님을 찾습니다.',
    content: '안녕하세요! 맛있는 밥 한 끼 함께하며 이야기 나누실 분을 찾습니다.',
    participants: ['user1'],
    max_participants: 2,
    location: '인천광역시 연수구 송도동',
    date: '2025. 05. 10. (수)',
    createdAt: '30분 전',
    like: 123,
    comment: 45,
    view: 678,
  },
  user: {
    nickname: '김멋사',
    gender: '남자',
    department: '컴퓨터공학과',
    studentNumber: 24,
    birth: '2001-08-25',
    profileImage: 'profileImage',
    rating: 40,
  },
};

export const PostItem = ({ post = MOCK_DATA.post, user = MOCK_DATA.user }) => {
  // 모집 인원 계산
  const recruitmentStatus = useMemo(() => {
    const isFull = (post?.participants?.length || 1) >= (post?.max_participants || 2);
    return {
      text: isFull ? '모집 완료' : '모집중',
      className: isFull ? 'bg-[#ccc]/60 text-[#999] w-[50px]' : 'bg-[#DBFCF5] text-[#3C9281] w-[38px]',
    };
  }, [post?.participants?.length, post?.max_participants]);

  // 학점 정보 계산
  const { grade, style: gradeStyle } = useMemo(() => {
    return getRatingWithStyle(user.rating);
  }, [user.rating]);

  return (
    <Link href={`/post/${post._id}`} className='block cursor-pointer'>
      {/* 사용자 프로필 */}
      <div>
        <div className='w-[412px] h-[178px] border-b border-[#d9d9d9] flex flex-col justify-between pt-2 pb-1 px-4'>
          <div className='flex items-center gap-2'>
            <img className='w-[50px] h-[50px] rounded-full' src={user.profileImage} alt={user.nickname} />
            <div className='flex flex-col'>
              <div className='flex items-center gap-1'>
                <span className='text-base font-bold text-[#1b1b1b]'>{user.nickname}</span>
                {/* 학점 표시 */}
                <div className='w-[26px] h-3 rounded-sm flex justify-center items-center' style={{ backgroundColor: `${gradeStyle.color}33` }}>
                  <span className='text-[10px] font-medium' style={{ color: gradeStyle.textColor }}>
                    {grade}
                  </span>
                </div>
                {user.gender === '남자' ? <ManIcon className='w-2 h-2' /> : <WomanIcon className='w-2 h-2' />}
                <span className='text-xs font-medium text-[#999] ml-1'>{post.createdAt}</span>
              </div>
              <div className='flex gap-2 text-xs font-medium text-[#999]'>
                <span>
                  {user.department} {user.studentNumber}학번
                </span>
                <span>{user.birth}년생</span>
              </div>
            </div>
          </div>

          {/* 게시글 정보 */}
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <h2 className='text-base font-medium text-[#1b1b1b]'>{post.title}</h2>
              <span className='text-xs font-medium text-[#999] mx-1'>
                ( {post.participants?.length} / {post?.max_participants} )
              </span>
              <div className={`h-3 rounded-sm flex justify-center items-center ${recruitmentStatus.className}`}>
                <span className='text-[10px] font-medium'>{recruitmentStatus.text}</span>
              </div>
            </div>
            <p className='text-xs font-medium text-[#999] break-words pb-2'>{post.content}</p>
          </div>

          {/* 약속 장소 및 날짜 */}
          <div className='flex flex-col'>
            <div className='flex items-center text-[#999]'>
              <PlaceIcon className='w-3 h-3 fill-current' />
              <span className='text-xs font-medium'>{post.location}</span>
            </div>
            <div className='flex items-center text-[#999]'>
              <DateIcon className='w-3 h-3 fill-current' />
              <span className='text-xs font-medium'>{post.date}</span>
            </div>
          </div>

          {/* 좋아요, 댓글, 조회수 */}
          <div className='flex justify-between items-center px-8'>
            <div className='flex items-center gap-1'>
              <LikeIcon />
              <span className='text-xs font-medium text-[#999]'>{post.like}</span>
            </div>
            <div className='flex items-center gap-1'>
              <CommentIcon />
              <span className='text-xs font-medium text-[#999]'>{post.comment}</span>
            </div>
            <div className='flex items-center gap-1'>
              <ViewIcon />
              <span className='text-xs font-medium text-[#999]'>{post.view}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
