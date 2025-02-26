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

export default function MatchingPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        ) : (
          <EmptyState title='완료된 매칭이 없습니다.' message='마음에 드는 모집글을 찾아 만남을 신청해 보세요!' />
        )}
      </div>
    </div>
  );
}

MatchingPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'매칭 완료'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
