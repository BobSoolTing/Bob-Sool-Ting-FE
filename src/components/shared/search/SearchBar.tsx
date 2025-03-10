import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBarIcon, ClearIcon, AlertIcon } from '@/assets/icons/SvgIcon';

// props 타입 정의
interface SearchBarProps {
  isSearchPage?: boolean; // 현재 페이지가 검색 페이지인지 여부
  isResultPage?: boolean; // 현재 페이지가 검색 결과 페이지인지 여부
  onSearch?: (term: string) => void; // 검색 수행 시 호출될 콜백 함수
  initialSearchTerm?: string; // 초기 검색어
  selectedCategory?: string; // 선택된 카테고리
  onCategoryChange?: (category: string) => void; // 카테고리 변경 시 호출될 콜백 함수
  showCategories?: boolean; // 카테고리를 표시할지 여부
}

export default function SearchBar({
  isSearchPage = false,
  isResultPage = false,
  onSearch = () => {},
  initialSearchTerm = '',
  selectedCategory = '전체',
  onCategoryChange = () => {},
  showCategories = false,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm); // 검색어 상태
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null); // input 요소에 대한 참조

  useEffect(() => {
    setSearchTerm(initialSearchTerm); // 초기 검색어가 변경될 때 상태 업데이트
  }, [initialSearchTerm]);

  // 검색 페이지에 진입했을 때 자동으로 input에 focus
  useEffect(() => {
    if (isSearchPage && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchPage]);

  // 검색 실행 함수
  const handleSearch = (): void => {
    if (!searchTerm.trim()) return; // 검색어가 비어있으면 실행하지 않음
    onSearch(searchTerm);
  };

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (category: string): void => {
    onCategoryChange(category);
  };

  // 검색어 초기화 (삭제 버튼 클릭 시)
  const handleClear = (): void => {
    setSearchTerm('');
  };

  // 표시할 카테고리 목록
  const categories = ['전체', '밥약', '술약', '과팅'];

  return (
    <div className='w-full'>
      {/* 검색 바 */}
      {!isSearchPage && !isResultPage ? (
        // 일반 페이지일 때 - 검색 페이지로 이동하는 링크
        <div className='flex w-[412px] h-11 relative overflow-hidden py-1 px-4'>
          <Link href={'/search'}>
            <div className='flex w-[340px] h-9 rounded-md items-center gap-2 text-base text-[#999] bg-[#f6f8fa] px-2'>
              <SearchBarIcon />
              나와 맞는 밥술팅 검색하기
              <span className='ml-auto'>
                <ClearIcon />
              </span>
            </div>
          </Link>
          {/* 알림 페이지로 이동 */}
          <Link href='/alert'>
            <div className='flex absolute top-1/2 right-0 transform -translate-y-1/2 mr-4 items-center'>
              <AlertIcon />
            </div>
          </Link>
        </div>
      ) : isResultPage ? (
        // 검색 결과 페이지일 때 - 읽기 전용 + 검색 페이지로 이동하는 링크
        <Link href='/search'>
          <div className='flex w-[380px] h-9 rounded-md items-center gap-2 text-base text-[#999] bg-[#f6f8fa] mt-1 mx-4 px-2 cursor-pointer'>
            <SearchBarIcon />
            <div className='bg-transparent text-[#1b1b1b] flex-grow'>{searchTerm || '나와 맞는 밥술팅 검색하기'}</div>
            <span className='ml-auto'>
              <ClearIcon />
            </span>
          </div>
        </Link>
      ) : (
        // 검색 페이지일 때 - 입력 가능 검색 바
        <div className='flex w-[380px] h-9 rounded-md items-center gap-2 text-base text-[#999] bg-[#f6f8fa] mt-1 mx-4 px-2'>
          <SearchBarIcon />
          <input
            ref={inputRef}
            type='text'
            className='bg-transparent outline-none text-[#1b1b1b] flex-grow'
            placeholder={searchTerm ? '' : '나와 맞는 밥술팅 검색하기'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <span className='ml-auto cursor-pointer' onClick={handleClear}>
            <ClearIcon />
          </span>
        </div>
      )}

      {/* 카테고리 필터 - 검색 페이지나 결과 페이지이며 showCategories가 true일 때만 표시 */}
      {(isSearchPage || isResultPage) && showCategories && (
        <div className='flex w-[264px] h-6 mx-4 mt-2 mb-4 gap-2'>
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`w-[60px] h-6 rounded-md flex items-center justify-center cursor-pointer transition-colors ${
                selectedCategory === category ? 'bg-[#2f7dff] text-white' : 'bg-[#f6f8fa] text-[#999]'
              }`}
            >
              <p className='text-sm text-center'>{category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
