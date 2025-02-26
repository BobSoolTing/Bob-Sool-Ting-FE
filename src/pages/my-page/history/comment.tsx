import React from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';
import Header from '@/components/shared/bst/Header';
import BottomBar from '@/components/shared/bst/BottomBar';
import { PostItem } from '@/components/shared/post/PostItem';

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

export default function CommentPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post._id} post={post} />)
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-xl font-bold text-[#767676]'>댓글을 작성한 모집글이 없습니다.</p>
          <p className='text-sm text-[#999]'>마음에 드는 모집글을 찾아 댓글을 작성해 보세요!</p>
        </div>
      )}
    </div>
  );
}

CommentPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <Header>{'댓글'}</Header>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
