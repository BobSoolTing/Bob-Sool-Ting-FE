import React from 'react';
import DetailPageText from '@/components/shared/post/PostDetailText';
import PostDetailImage from '@/components/shared/post/PostDetailImage';
import { IPostDetail } from '@/stores/post-detail';

const PostDetailContent = ({ postDetail }: { postDetail: IPostDetail }) => {
  return (
    <>
      <DetailPageText type='title'>{postDetail.title}</DetailPageText>
      <DetailPageText type='content'>{postDetail.content}</DetailPageText>
      <DetailPageText type='place'>{postDetail.location}</DetailPageText>
      <DetailPageText type='date'>{postDetail.date}</DetailPageText>
      <DetailPageText type='personnel'>{`${postDetail.participants.length} / ${postDetail.max_participants}`}</DetailPageText>
      <PostDetailImage />
    </>
  );
};

export default PostDetailContent;
