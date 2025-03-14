import React, { useState, useEffect } from 'react';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import BottomBar from '@/components/shared/bst/BottomBar';
import SearchBar from '@/components/shared/search/SearchBar';
import RecentSearches from '@/components/shared/search/RecentSearches';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>(['파스타 맛집', '카페 추천', '서울 야경 명소', '베트남 여행', '자취 요리 레시피']);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    if (query) {
      setSearchTerm(Array.isArray(query) ? query[0] : (query as string));
    }
  }, [query]);

  const handleSearch = (term: string = searchTerm): void => {
    if (!term.trim()) return;

    setRecentSearches((prev) => [term, ...prev.filter((item) => item !== term)]);

    // 검색 결과 페이지로 이동하면서 검색어와 카테고리 전달
    router.push(`/search/searchresultpage?query=${encodeURIComponent(term)}&category=${encodeURIComponent(selectedCategory)}`);
  };

  const handleDeleteSearch = (index: number): void => {
    setRecentSearches((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = (): void => {
    setRecentSearches([]);
  };

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (category: string): void => {
    setSelectedCategory(category);
  };

  const handleRecentSearchClick = (search: string): void => {
    setSearchTerm(search); // 입력창에 검색어 설정
    handleSearch(search); // 검색 실행
  };

  return (
    <div className=''>
      {/* 개선된 SearchBar 컴포넌트 사용 */}
      <SearchBar
        isSearchPage={true}
        onSearch={handleSearch}
        initialSearchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryClick}
        showCategories={true}
      />

      <RecentSearches
        recentSearches={recentSearches}
        onSearchClick={handleRecentSearchClick}
        onDeleteSearch={handleDeleteSearch}
        onClearAll={handleClearAll}
      />
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
