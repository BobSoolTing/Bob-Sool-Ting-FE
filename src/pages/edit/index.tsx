// @/pages/edit/index.tsx
import { useRouter } from 'next/router';
import BottomBar from '@/components/shared/bst/BottomBar';
import { ReactNode } from 'react';
import Button from '@/components/shared/Button';
import Header from '@/components/shared/bst/Header';
import { usePostFormStore } from '@/stores/post-form';
import PostFormFields from '@/components/shared/post/PostFormFields';
import DynamicBottomSheet from '@/components/shared/post/DynamicBottomSheet';
import TitleInput from '@/components/shared/post/TitleInput';
import ContentInput from '@/components/shared/post/ContentInput';

export default function PostEditPage() {
  const { isComplete, activeSheet, openBottomSheet, closeBottomSheet, updateFormData, resetFormData } = usePostFormStore();

  const router = useRouter();

  const onClickButton = () => {
    /** API 구현 완료 시 코드 추가 예정 */
    /** API 구현 완료 시 코드 추가 예정 */
    /** API 구현 완료 시 코드 추가 예정 */
    alert('완료 되었습니다');
    resetFormData();
    router.back();
  };

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

PostEditPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
