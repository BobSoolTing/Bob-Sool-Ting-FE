import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import profileImage from '@/assets/images/profileImage.png';
import Image from 'next/image';
import { ManIcon, WomanIcon, HeartIcon } from '@/assets/icons/SvgIcon';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';
import { getRatingWithStyle } from '@/utils/ratingCalc';
import { getTimeAgo } from '@/utils/timeAgo';
import { usePostDetailStore } from '@/stores/post-detail';
import DetailPageText from '@/components/shared/post/PostDetailText';
import PostDetailImage from '@/components/shared/post/PostDetailImage';
import CommentInput from '@/components/shared/post/CommentInput';
import RootComment from '@/components/shared/post/RootComment';

const dummyData = {
  category: 'Meal Date',
  nickname: '맹구',
  rating: 70,
  gender: 'MAN',
  createdAt: '2024-12-12',
  department: '패션공학과',
  studentNumber: 25,
  birth: '2004-01-01',
  likeCount: 0,
  title: '제목이에용',
  content:
    '본문이에용. 저랑 밥약속 하실래요??  본문이에용. 저랑 밥약속 하실래요??  본문이에용. 저랑 밥약속 하실래요??  본문이에용. 저랑 밥약속 하실래요??  본문이에용. 저랑 밥약속 하실래요??  ',
  location: '강남역',
  date: '2025-03-01',
  max_participants: 5,
  participants: ['유저1', '유저2'],
  comment: [
    {
      nickname: '수지',
      rating: 50,
      gender: 'WOMAN',
      department: '연극영화학과', // 학과
      studentNumber: 25, // 학번
      birth: '2006-10-03', // 출생 연월일
      comment:
        '안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. ',
      cratedAt: '2024-03-02',
    },
    {
      nickname: '맹구',
      rating: 70,
      gender: 'MAN',
      department: '컴퓨터과학과', // 학과
      studentNumber: 22, // 학번
      birth: '2002-10-03', // 출생 연월일
      comment:
        '안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. 안녕하세요 테스트 댓글입니다. ',
      cratedAt: '2024-03-03',
    },
  ],
};

export default function PostDetailPage() {
  const router = useRouter();
  const { postDetail, updatePostDetail } = usePostDetailStore();

  // dummyData로 postDetail 업데이트하는 useEffect 추가
  useEffect(() => {
    updatePostDetail(dummyData);
    console.log(postDetail);
  }, [updatePostDetail]);

  const { grade, style } = getRatingWithStyle(postDetail.rating);
  const birthYear = postDetail.birth.substring(2, 4);
  const time = getTimeAgo(postDetail.createdAt);

  return (
    <>
      {postDetail.category === 'Meal Date' ? (
        <Header>밥약</Header>
      ) : postDetail.category === 'Drink Date' ? (
        <Header>술약</Header>
      ) : (
        <Header>과팅</Header>
      )}
      <div className='w-full px-4 py-2'>
        <div className='w-full flex items-center'>
          {/* Profile section */}
          <div className='flex-shrink-0 mr-6'>
            <Image width={50} height={50} className='rounded-full' src={profileImage} alt='프로필 사진' />
          </div>

          {/* User info section */}
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

          {/* Heart icon section */}
          <div className='flex flex-col items-center justify-center h-full'>
            <HeartIcon className='w-4 h-4 mb-1' />
            <p className='text-xs font-bold text-[#999]'>{postDetail.likeCount}</p>
          </div>
        </div>

        <DetailPageText type='title'>{postDetail.title}</DetailPageText>
        <DetailPageText type='content'>{postDetail.content}</DetailPageText>
        <DetailPageText type='place'>{postDetail.location}</DetailPageText>
        <DetailPageText type='date'>{postDetail.date}</DetailPageText>
        <DetailPageText type='personnel'>{`${postDetail.participants.length} / ${postDetail.max_participants}`}</DetailPageText>
        <PostDetailImage></PostDetailImage>
      </div>
      <div className='w-[412px] h-2 overflow-hidden bg-[#f6f8fa] my-4' />
      {postDetail && postDetail.comment && postDetail.comment.length > 0 ? (
        <>
          <div className='flex flex-row'>
            <div className='text-[20px] text-bold'>댓글</div>
            <div className='text-[20px] text-bold text-[#2768FF] ml-1'>{`${postDetail.comment.length}`}</div>
          </div>
          <CommentInput />
          <div className='flex flex-col gap-8 px-4'>
            {postDetail.comment.map((commentData, index) => {
              return <RootComment key={index} commentData={commentData}></RootComment>;
            })}
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-row'>
            <div className='text-[20px] text-bold'>댓글</div>
            <div className='text-[20px] text-bold text-[#2768FF] ml-1'>0</div>
          </div>
          <CommentInput />
        </>
      )}
    </>
  );
}

PostDetailPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
