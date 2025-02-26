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

export default function MyPostPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div>
      <div>
        {posts.length > 0 ? (
          posts.map((post) => <PostItem key={post._id} post={post} />)
        ) : (
          <EmptyState title='작성한 모집글이 없습니다.' message='모집글을 작성해 보세요!' />
        )}
      </div>
    </div>
  );
}

MyPostPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'내 모집글'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
