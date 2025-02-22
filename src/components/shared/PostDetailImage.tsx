import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PostDetailImage() {
  const router = useRouter();
  const { postId } = router.query;
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) {
      // 임시 이미지 데이터
      const fakeImages = [
        'https://static.news.zumst.com/images/108/2023/12/13/d773a9347a4847a79ace30bc1b2ddc1c.jpg',
        'https://static.news.zumst.com/images/108/2023/12/13/d773a9347a4847a79ace30bc1b2ddc1c.jpg',
        'https://static.news.zumst.com/images/108/2023/12/13/d773a9347a4847a79ace30bc1b2ddc1c.jpg',
        'https://static.news.zumst.com/images/108/2023/12/13/d773a9347a4847a79ace30bc1b2ddc1c.jpg',
      ];
      setImages(fakeImages);
      return;
    }

    const fetchImages = async () => {
      try {
        setError(null);

        // const response = await fetch(`/api/posts/${postId}/images`);
        // if (!response.ok) throw new Error('API 요청 실패');

        // const data = await response.json();
        // setImages(data.images || []);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchImages();
  }, [postId]);

  // 에러가 있을 때 에러 메시지 표시
  if (error) return <p className='text-red-500'>{error}</p>;

  // 이미지가 없으면 아무런 값도 표시하지 않음
  if (images.length === 0) return null;

  return (
    <div className='w-full overflow-x-auto flex gap-2 px-4'>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`게시글 ${postId}의 이미지 ${index + 1}`} className='w-[100px] h-[100px] rounded-md object-cover my-2' />
      ))}
    </div>
  );
}
