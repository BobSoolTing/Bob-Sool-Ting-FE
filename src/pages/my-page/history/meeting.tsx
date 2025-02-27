import React from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';
import { PostItem } from '@/components/shared/post/PostItem';
import EmptyState from '@/pages/my-page/history/EmptyState';

interface Post {
  _id: string;
  title: string;
  content: string;
  participants: string[];
  max_participants: number;
  location: string;
  date: string;
  createdAt: string;
  like: number;
  comment: number;
  view: number;
}

export default function MeetingPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        ) : (
          <EmptyState title='아직 참여한 모임이 없습니다.' message='마음에 드는 모집글을 찾아 신청하고, 새로운 모임을 시작해 보세요!' />
        )}
      </div>
    </div>
  );
}

MeetingPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'만남 기록'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
