import { useRouter } from 'next/router';
import NotFoundPage from '@/pages/404';
import BottomBar from '@/components/shared/bst/BottomBar';
import { ReactNode } from 'react';
import Button from '@/components/shared/Button';
import Header from '@/components/shared/bst/Header';
import { usePostForm } from '@/hooks/usePostForm';
import PostFormFields from '@/components/shared/post/PostFormFields';
import DynamicBottomSheet from '@/components/shared/post/DynamicBottomSheet';
import TitleInput from '@/components/shared/post/TitleInput';
import ContentInput from '@/components/shared/post/ContentInput';

// 허용된 카테고리 목록
const ALLOWED_CATEGORIES = ['bob', 'sool', 'ting'];

export default function WritePage() {
  const { isComplete, activeSheet, openBottomSheet, closeBottomSheet, updateFormData } = usePostForm();

  const router = useRouter();
  const { category } = router.query;

  // 유효하지 않은 카테고리인 경우 404 에러 표시
  if (router.isReady && category && !ALLOWED_CATEGORIES.includes(category as string)) {
    return <NotFoundPage />;
  }

  return (
    <div className='relative flex flex-col w-full h-screen bg-white pb-[56px]'>
      <Header>게시글 작성</Header>
      {/** 메인 컨텐츠 : 제목, 본문, 기타 */}
      <div className='flex flex-col flex-1 px-6 pt-4 pb-6 overflow-auto'>
        <TitleInput updateFormData={updateFormData} />
        <ContentInput updateFormData={updateFormData} />
        <PostFormFields onFieldClick={openBottomSheet} />
      </div>
      <Button isComplete={isComplete} className='mb-4'>
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
