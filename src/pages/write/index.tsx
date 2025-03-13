import { useRouter } from 'next/router';
import NotFoundPage from '@/pages/404';
import BottomBar from '@/components/shared/bst/BottomBar';
import { ReactNode, useEffect, useState } from 'react';
import Button from '@/components/shared/Button';
import Header from '@/components/shared/bst/Header';
import { usePostFormStore } from '@/stores/post-form';
import PostFormFields from '@/components/shared/post/PostFormFields';
import DynamicBottomSheet from '@/components/shared/post/DynamicBottomSheet';
import TitleInput from '@/components/shared/post/TitleInput';
import ContentInput from '@/components/shared/post/ContentInput';
import axios from 'axios';

// 허용된 카테고리 목록
const ALLOWED_CATEGORIES = ['bob', 'sool', 'ting'];

export default function WritePage() {
  const { isComplete, activeSheet, formData, openBottomSheet, closeBottomSheet, updateFormData, resetFormData } = usePostFormStore();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [token, setToken] = useState<string | null>(null);

  const router = useRouter();
  const { category } = router.query;

  // 클라이언트 사이드에서만 localStorage 접근
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('accessToken'));
    }

    // URL의 카테고리 파라미터가 있으면 폼 데이터 업데이트
    if (category && ALLOWED_CATEGORIES.includes(category as string)) {
      updateFormData('category', category.toString().toUpperCase());
    }
  }, [category, updateFormData]);

  const createPost = async () => {
    try {
      // 폼 데이터를 요청 바디로 전달하고, 헤더는 세 번째 파라미터로 전달
      console.log(token);
      const res = await axios.post(`${BACKEND_URL}/api/post`, formData, {
        headers: { Authorization: `${token}` },
      });
      const data = res.data;
      console.log(data);
      resetFormData();
      router.back();
    } catch (err) {
      alert(`포스트 생성 중 에러 발생 : ${err}`);
    }
  };

  const onClickButton = () => {
    createPost();
  };

  // 유효하지 않은 카테고리인 경우 404 에러 표시
  if (router.isReady && category && !ALLOWED_CATEGORIES.includes(category as string)) {
    return <NotFoundPage />;
  }
  console.log(formData);
  return (
    <div className='relative flex flex-col w-full h-screen bg-white pb-[56px]'>
      <Header>게시글 작성</Header>
      {/** 메인 컨텐츠 : 제목, 본문, 기타 */}
      <div className='flex flex-col flex-1 px-6 pt-4 pb-6 overflow-auto'>
        <TitleInput updateFormData={updateFormData} />
        <ContentInput updateFormData={updateFormData} />
        <PostFormFields onFieldClick={openBottomSheet} />
      </div>
      <Button onClick={onClickButton} isComplete={isComplete} className='mb-4'>
        완료
      </Button>

      {/* 동적으로 BottomSheet 렌더링 */}
      <DynamicBottomSheet activeSheet={activeSheet} onClose={closeBottomSheet} />
    </div>
  );
}

WritePage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
