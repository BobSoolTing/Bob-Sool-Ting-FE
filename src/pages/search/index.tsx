import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import BottomBar from '@/components/shared/bst/BottomBar';
import { SearchBarIcon, ClearIcon, ClockIcon, SearchCloseIcon } from '@/assets/icons/SvgIcon';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    if (query) {
      setSearchTerm(Array.isArray(query) ? query[0] : query);
    }
  }, [query]);

  const handleSearch = (term = searchTerm) => {
    if (!term.trim()) return;

    setRecentSearches((prev) => [term, ...prev.filter((item) => item !== term)]);

    // 검색 페이지로 이동
    router.push(`/search/searchresultpage?query=${encodeURIComponent(term)}&category=${encodeURIComponent(selectedCategory)}`);
  };

  const handleDeleteSearch = (index: number) => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setRecentSearches([]);
  };

  // 카테고리 클릭 시 변경
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleRecentSearchClick = (search: string) => {
    setSearchTerm(search); // 입력창에 검색어 설정
    handleSearch(search); // 검색 실행
  };

  return (
    <div className=''>
      {/* 검색 바 */}
      <div className='flex w-[380px] h-9 rounded-md items-center gap-2 text-base text-[#999] bg-[#f6f8fa] mt-1 mx-4 px-2'>
        <SearchBarIcon />
        <input
          type='text'
          className='bg-transparent outline-none text-[#1b1b1b] flex-grow'
          placeholder={searchTerm || '나와 맞는 밥술팅 검색하기'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <span className='ml-auto cursor-pointer' onClick={() => handleSearch()}>
          <ClearIcon />
        </span>
      </div>

      {/* 카테고리 필터 */}
      <div className='flex w-[264px] h-6 mx-4 mt-2 mb-4 gap-2'>
        {['전체', '밥약', '술약', '과팅'].map((category) => (
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

      {/* 최근 검색 */}
      <div className='w-[412px] h-auto relative overflow-hidden'>
        {/* 제목 & 전체 삭제 버튼 (검색 기록이 있을 때만 보임) */}
        <div className='w-[380px] flex justify-between mx-4'>
          <p className='text-base font-bold text-[#1b1b1b]'>최근 검색</p>
          {recentSearches.length > 0 && (
            <p className='text-base text-[#999] cursor-pointer' onClick={handleClearAll}>
              전체 삭제
            </p>
          )}
        </div>

        {/* 검색 기록이 없을 경우 메시지 출력 */}
        {recentSearches.length === 0 ? (
          <div className='w-full h-[750px] flex flex-col justify-center items-center py-8 mx-4'>
            <p className='text-xl font-bold text-[#767676]'>최근 검색어 내역이 없습니다.</p>
            <p className='text-sm text-[#999]'>검색어를 입력해 보세요!</p>
          </div>
        ) : (
          // 최근 검색 리스트 (검색 기록이 있을 경우만 보임)
          <div className='w-[380px] max-h-[750px] overflow-y-scroll py-2 px-2 mx-4 scrollbar-hidden'>
            {recentSearches.map((search, index) => (
              <div
                key={index}
                className='w-[364px] h-8 flex items-center justify-between my-1 cursor-pointer'
                onClick={() => handleRecentSearchClick(search)}
              >
                <div className='flex items-center'>
                  <ClockIcon />
                  <span className='text-base text-[#1b1b1b] ml-2'>{search}</span>
                </div>
                <span
                  className='cursor-pointer'
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSearch(index);
                  }}
                >
                  <SearchCloseIcon />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

SearchPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
