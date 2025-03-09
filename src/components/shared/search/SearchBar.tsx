import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchBarIcon, ClearIcon, AlertIcon } from '@/assets/icons/SvgIcon';

// props 타입 정의
interface SearchBarProps {
  isSearchPage?: boolean;
  isResultPage?: boolean; // 새로운 prop 추가
  onSearch?: (term: string) => void;
  initialSearchTerm?: string;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  showCategories?: boolean;
}

export default function SearchBar({
  isSearchPage = false,
  isResultPage = false, // 기본값 추가
  onSearch = () => {},
  initialSearchTerm = '',
  selectedCategory = '전체',
  onCategoryChange = () => {},
  showCategories = false,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const router = useRouter();

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleSearch = (): void => {
    if (!searchTerm.trim()) return;
    onSearch(searchTerm);
  };

  const handleCategoryClick = (category: string): void => {
    onCategoryChange(category);
  };

  const handleClear = (): void => {
    setSearchTerm('');
  };

  // 표시할 카테고리
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
        // 검색 페이지일 때 - 입력 가능 + 검색 기능
        <div className='flex w-[380px] h-9 rounded-md items-center gap-2 text-base text-[#999] bg-[#f6f8fa] mt-1 mx-4 px-2'>
          <SearchBarIcon />
          <input
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
