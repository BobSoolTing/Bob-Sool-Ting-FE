// pages/[category]/create.tsx
import { useRouter } from 'next/router';
import NotFoundPage from '@/pages/404';
import { PlaceIcon, DateIcon, PersonnelIcon } from '@/assets/icons/SvgIcon';
import BottomBar from '@/components/shared/bst/BottomBar';
import { ReactNode } from 'react';

// 허용된 카테고리 목록
const ALLOWED_CATEGORIES = ['bob', 'sool', 'ting'];

export default function WritePage() {
  const router = useRouter();
  const { category } = router.query;

  // 유효하지 않은 카테고리인 경우 404 에러 표시
  if (router.isReady && category && !ALLOWED_CATEGORIES.includes(category as string)) {
    return <NotFoundPage />;
  }

  return (
    <div className='flex flex-col w-full h-screen bg-white pb-[56px]'>
      {/* 헤더 */}
      <div className='flex justify-center items-center w-full h-14 border-b border-[#eee]'>
        <p className='text-2xl font-bold text-[#1b1b1b]'>{`게시글 작성`}</p>
      </div>

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
          <div className='flex items-center h-5'>
            <PlaceIcon className='mr-2' />
            <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>만남 장소를 입력해 주세요</div>
          </div>

          <div className='flex items-center h-5'>
            <DateIcon className='mr-2' />
            <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>약속 날짜를 선택해 주세요</div>
          </div>

          <div className='flex items-center h-5'>
            <PersonnelIcon className='mr-2' />
            <div className='text-lg font-medium text-[#999] border-0 focus:outline-none'>인원 수를 선택해 주세요</div>
          </div>
        </div>

        {/* 완료 버튼 */}
        <div className='flex justify-center items-center w-full h-[50px] rounded-md bg-[#999] mt-4'>
          <p className='text-lg font-semibold text-white'>완료</p>
        </div>
      </div>
    </div>
  );
}

WritePage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};
