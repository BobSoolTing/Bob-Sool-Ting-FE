// pages/[category]/create.tsx
import { useRouter } from 'next/router';
import NotFoundPage from '@/pages/404';
import { PlaceIcon, DateIcon, PersonnelIcon } from '@/assets/icons/SvgIcon';
import BottomBar from '@/components/shared/bst/BottomBar';
import { ReactNode, useState } from 'react';
import Button from '@/components/shared/Button';
import Header from '@/components/shared/bst/Header';
import BottomSheetPlace from '@/components/shared/post/BottomSheetPlace';

// 허용된 카테고리 목록
const ALLOWED_CATEGORIES = ['bob', 'sool', 'ting'];

export default function WritePage() {
  const [isComplete, setIsComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { category } = router.query;

  // 유효하지 않은 카테고리인 경우 404 에러 표시
  if (router.isReady && category && !ALLOWED_CATEGORIES.includes(category as string)) {
    return <NotFoundPage />;
  }

  return (
    <div className='relative flex flex-col w-full h-screen bg-white pb-[56px]'>
      <Header>게시글 작성</Header>

      {/* 메인 콘텐츠 */}
      <div className='flex flex-col flex-1 px-6 pt-4 pb-6 overflow-auto'>
        {/* 제목 입력 */}
        <div className='w-full h-14 mb-4'>
          <input
            className='text-2xl font-bold text-[#1b1b1b] border-0 focus:outline-none placeholder:text-[#999]'
            placeholder='제목을 작성해 주세요'
          />
        </div>

        {/* 본문 입력 */}
        <div className='w-full flex-1 mb-4'>
          <input className='text-lg font-medium text-[#999999] border-0 focus:outline-none' placeholder='본문 내용을 작성해 주세요' />
        </div>

        {/* 추가 정보 입력 */}
        <div className='flex flex-col w-full space-y-4 mb-4'>
          <div
            onClick={() => {
              setIsOpen(true);
            }}
            className='flex items-center h-5 cursor-pointer'
          >
            <PlaceIcon className='mr-2' />
            <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>만남 장소를 입력해 주세요</div>
          </div>

          <div onClick={() => {}} className='flex items-center h-5 cursor-pointer'>
            <DateIcon className='mr-2' />
            <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>약속 날짜를 선택해 주세요</div>
          </div>

          <div onClick={() => {}} className='flex items-center h-5 cursor-pointer'>
            <PersonnelIcon className='mr-2' />
            <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>인원 수를 선택해 주세요</div>
          </div>
        </div>
      </div>
      <Button isComplete={isComplete} className='mb-4'>
        완료
      </Button>
      <BottomSheetPlace
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      ></BottomSheetPlace>
    </div>
  );
}

WritePage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
