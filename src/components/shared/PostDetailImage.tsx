import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PostDetailImage() {
  const router = useRouter();
  const { postId } = router.query;
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) return; // postId가 없으면 요청 안 함

    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/posts/${postId}/images`);
        if (!response.ok) throw new Error('API 요청 실패');

        const data = await response.json();
        setImages(data.images || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [postId]);

  // API 요청 중일 때
  if (loading) return null;

  // API 자체가 실패한 경우에만 에러 메시지 표시 -> 값이 있는데 불러오지 못하는 경우
  if (error) return <p className='text-red-500'>{error}</p>;

  // 이미지가 없으면 아무것도 렌더링하지 않음
  if (images.length === 0) return null;

  return (
    <div className='w-full overflow-x-auto flex gap-2 px-4'>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`게시글 ${postId}의 이미지 ${index + 1}`} className='w-[100px] h-[100px] rounded-md object-cover mt-2 mb-4' />
      ))}
    </div>
  );
}
