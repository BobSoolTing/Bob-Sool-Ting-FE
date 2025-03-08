import React from 'react';
import DetailPageText from '@/components/shared/post/PostDetailText';
import PostDetailImage from '@/components/shared/post/PostDetailImage';
import { IPostDetail } from '@/stores/post-detail';

const PostDetailContent = ({ postDetail }: { postDetail: IPostDetail }) => {
  const [year, month, day] = postDetail.date.split('-');
  return (
    <>
      <DetailPageText type='title'>{postDetail.title}</DetailPageText>
      <DetailPageText type='content'>{postDetail.content}</DetailPageText>
      <DetailPageText type='place'>{postDetail.location}</DetailPageText>
      <DetailPageText type='date'>{`${year}년 ${month}월 ${day}일`}</DetailPageText>
      <DetailPageText type='personnel'>{`${postDetail.participants.length}인 / ${postDetail.max_participants}인`}</DetailPageText>
      <PostDetailImage />
    </>
  );
};

export default PostDetailContent;
