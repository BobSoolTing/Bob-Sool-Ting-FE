import React, { ReactNode } from 'react';
import Link from 'next/link';
import { LikeIcon, CommentIcon, ViewIcon, DateIcon, LocationIcon, ManIcon, WomanIcon } from '@/assets/icons/SvgIcon';

interface User {
  nickname: string;
  gender: string;
  department: string;
  studentNumber: string;
  birth: string;
}

interface Post {
  _id: string;
  title: string;
  content: string;
  participants: User[];
  max_participants: number;
  location: string;
  date: string;
  like: number;
  comment: number;
  view: number;
  status: string;
  createdAt: string;
}

interface PostItemProps {
  user: User;
  post: Post;
  children: ReactNode;
  rank: string;
}

export default function PostItem({ user, post, children, rank }: PostItemProps) {
  const gradeInfo: { [key: string]: { label: string; color: string; textColor: string } } = {
    F: { label: 'F', color: '#643726', textColor: '#767676' },
    D0: { label: 'D0', color: '#C0C0C0', textColor: '#767676' },
    'D+': { label: 'D+', color: '#C0C0C0', textColor: '#767676' },
    C0: { label: 'C0', color: '#F8A900', textColor: '#767676' },
    'C+': { label: 'C+', color: '#F8A900', textColor: '#767676' },
    B0: { label: 'B0', color: '#00B0B9', textColor: '#767676' },
    'B+': { label: 'B+', color: '#00B0B9', textColor: '#767676' },
    A0: { label: 'A0', color: '#4A90E2', textColor: '#767676' },
    'A+': { label: 'A+', color: '#4A90E2', textColor: '#767676' },
  };

  const gradeData = gradeInfo[rank] || gradeInfo.F;

  return (
    <Link href={`/post/${post?._id || ''}`} className='block cursor-pointer'>
      <div>
        {children}
        <div className='w-[412px] h-[178px] border-b border-[#d9d9d9] flex flex-col justify-between pt-2 pb-1 px-4'>
          {/* 사용자 정보 */}
          <div className='flex items-center gap-2'>
            <img className='w-[50px] h-[50px] rounded-full' src='image.png' />
            <div className='flex flex-col'>
              <div className='flex items-center gap-1'>
                <p className='text-base font-bold text-[#1b1b1b]'>{user?.nickname || 'unknown'}</p>
                <div className='w-[26px] h-3 rounded-sm flex justify-center items-center' style={{ backgroundColor: `${gradeData.color}33` }}>
                  <p className='text-[10px] font-medium' style={{ color: `${gradeData.textColor}` }}>
                    {gradeData.label}
                  </p>
                </div>
                <p>{user?.gender === '남자' ? <ManIcon /> : <WomanIcon />}</p>
                <p className='text-xs font-medium text-[#999] ml-1'>{post?.createdAt || '30분 전'}</p>
              </div>
              <div className='flex gap-2 text-xs font-medium text-[#999]'>
                <p>
                  {user?.department || '컴퓨터공학과'} {user?.studentNumber || 2024062}학번
                </p>
                <p>{user?.birth || 94}년생</p>
              </div>
            </div>
          </div>

          {/* 모집 상태 + 제목 + 모집 인원 */}
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <p className='text-base font-medium text-[#1b1b1b]'>{post?.title || '밥약하실 후배님을 찾습니다.'}</p>
              <p className='text-xs font-medium text-[#999] text-center mr-1 ml-1'>
                ( {post?.participants?.length || 1} / {post?.max_participants || 2} )
              </p>
              <div
                className={`h-3 rounded-sm flex justify-center items-center ${
                  (post?.participants?.length || 1) >= (post?.max_participants || 2)
                    ? 'bg-[#ccc]/60 text-[#999] w-[50px]'
                    : 'bg-[#DBFCF5] text-[#3C9281] w-[38px]'
                }`}
              >
                <p className='text-[10px] font-medium'>
                  {(post?.participants?.length || 1) >= (post?.max_participants || 2) ? '모집 완료' : '모집중'}
                </p>
              </div>
            </div>

            {/* 내용 */}
            <div className='flex pb-2'>
              <p className='text-xs font-medium text-[#999] break-words'>
                {post?.content || '안녕하세요! 맛있는 밥 한 끼 함께하며 이야기 나누실 분을 찾습니다.'}
              </p>
            </div>
          </div>

          {/* 약속 날짜 & 장소 */}
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <LocationIcon />
              <p className='text-xs font-medium text-[#999]'>{post?.location || '인천광역시 연수구 송도동'}</p>
            </div>
            <div className='flex items-center'>
              <DateIcon />
              <p className='text-xs font-medium text-[#999]'>{post?.date || '2025. 05. 10. (수)'}</p>
            </div>
          </div>

          {/* 좋아요, 댓글, 조회수 */}
          <div className='flex justify-between items-center px-8'>
            <div className='flex items-center gap-1'>
              <LikeIcon />
              <p className='text-xs font-medium text-[#999]'>{post?.like || 123}</p>
            </div>
            <div className='flex items-center gap-1'>
              <CommentIcon />
              <p className='text-xs font-medium text-[#999]'>{post?.comment || 45}</p>
            </div>
            <div className='flex items-center gap-1'>
              <ViewIcon />
              <p className='text-xs font-medium text-[#999]'>{post?.view || 678}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
