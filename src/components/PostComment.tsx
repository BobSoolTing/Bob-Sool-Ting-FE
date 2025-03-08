import React from 'react';
import CommentInput from '@/components/shared/post/CommentInput';
import RootComment from '@/components/shared/post/RootComment';
import { IPostDetail } from '@/stores/post-detail';

const PostComment = ({ postDetail }: { postDetail: IPostDetail }) => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='text-[20px] text-bold'>댓글</div>
        <div className='text-[20px] text-bold text-[#2768FF] ml-1'>{postDetail.comment.length}</div>
      </div>
      <CommentInput />
      <div className='flex flex-col px-4'>
        {postDetail.comment.map((commentData, index) => (
          <RootComment key={index} commentData={commentData} />
        ))}
      </div>
    </>
  );
};

export default PostComment;
