import React, { ReactNode, useEffect } from 'react';
import { usePostDetailStore } from '@/stores/post-detail';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';
import PostProfile from '@/components/PostProfile';
import PostDetailContent from '@/components/PostDetailContent';
import PostComment from '@/components/PostComment';

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
  content: '본문이에용. 저랑 밥약속 하실래요??',
  location: '강남역',
  date: '2025-03-01',
  max_participants: 5,
  participants: ['유저1', '유저2'],
  comment: [
    {
      nickname: '수지',
      rating: 95,
      gender: 'MAN',
      department: '연극영화학과',
      studentNumber: 25,
      birth: '2006-10-03',
      comment: '안녕하세요 테스트 댓글입니다.',
      createdAt: '2025-03-02',
      child: [
        {
          nickname: '수지',
          rating: 50,
          gender: 'MAN',
          department: '연극영화학과',
          studentNumber: 25,
          birth: '2006-10-03',
          comment: '안녕하세요 테스트 댓글입니다.',
          createdAt: '2025-03-02',
        },
        {
          nickname: '수지',
          rating: 50,
          gender: 'WOMAN',
          department: '연극영화학과',
          studentNumber: 25,
          birth: '2006-10-03',
          comment: '안녕하세요 테스트 댓글입니다.',
          createdAt: '2025-03-02',
        },
      ],
    },
    {
      nickname: '수지',
      rating: 50,
      gender: 'WOMAN',
      department: '연극영화학과',
      studentNumber: 25,
      birth: '2006-10-03',
      comment: '안녕하세요 테스트 댓글입니다.',
      createdAt: '2025-03-02',
    },
    {
      nickname: '수지',
      rating: 40,
      gender: 'WOMAN',
      department: '연극영화학과',
      studentNumber: 25,
      birth: '2006-10-03',
      comment: '안녕하세요 테스트 댓글입니다.',
      createdAt: '2025-03-02',
    },
    {
      nickname: '수지',
      rating: 95,
      gender: 'WOMAN',
      department: '연극영화학과',
      studentNumber: 25,
      birth: '2006-10-03',
      comment: '안녕하세요 테스트 댓글입니다.',
      createdAt: '2025-03-02',
      child: [
        {
          nickname: '수지',
          rating: 50,
          gender: 'WOMAN',
          department: '연극영화학과',
          studentNumber: 25,
          birth: '2006-10-03',
          comment: '안녕하세요 테스트 댓글입니다.',
          createdAt: '2025-03-02',
        },
        {
          nickname: '수지',
          rating: 50,
          gender: 'WOMAN',
          department: '연극영화학과',
          studentNumber: 25,
          birth: '2006-10-03',
          comment: '안녕하세요 테스트 댓글입니다.',
          createdAt: '2025-03-02',
        },
      ],
    },
    {
      nickname: '수지',
      rating: 95,
      gender: 'WOMAN',
      department: '연극영화학과',
      studentNumber: 25,
      birth: '2006-10-03',
      comment: '안녕하세요 테스트 댓글입니다.',
      createdAt: '2025-03-02',
      child: [
        {
          nickname: '수지',
          rating: 50,
          gender: 'WOMAN',
          department: '연극영화학과',
          studentNumber: 25,
          birth: '2006-10-03',
          comment: '안녕하세요 테스트 댓글입니다.',
          createdAt: '2025-03-02',
        },
        {
          nickname: '수지',
          rating: 50,
          gender: 'WOMAN',
          department: '연극영화학과',
          studentNumber: 25,
          birth: '2006-10-03',
          comment: '안녕하세요 테스트 댓글입니다.',
          createdAt: '2025-03-02',
        },
      ],
    },
  ],
};

export default function PostDetailPage() {
  const { postDetail, updatePostDetail } = usePostDetailStore();

  useEffect(() => {
    updatePostDetail(dummyData);
  }, [updatePostDetail]);

  return (
    <>
      <Header>{postDetail.category === 'Meal Date' ? '밥약' : postDetail.category === 'Drink Date' ? '술약' : '과팅'}</Header>
      <div className='pt-4 pb-16'>
        <div className='w-full px-4 py-2'>
          <PostProfile postDetail={postDetail} />
          <PostDetailContent postDetail={postDetail} />
        </div>
        <div className='w-[412px] h-2 overflow-hidden bg-[#f6f8fa] my-4' />
        <PostComment postDetail={postDetail} />
      </div>
    </>
  );
}

PostDetailPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
