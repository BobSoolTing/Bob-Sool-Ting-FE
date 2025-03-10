import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BottomBar from '@/components/shared/bst/BottomBar';
import SearchBar from '@/components/shared/search/SearchBar';

// Post 타입 정의
interface Post {
  id: string;
  title: string;
  // 필요한 필드 추가
}

export default function SearchResultsPage() {
  const router = useRouter();
  const { query, category: routerCategory } = router.query;
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');

  useEffect(() => {
    if (!router.isReady) return;

    // 라우터 쿼리에서 검색어 업데이트
    if (query) {
      setSearchTerm(Array.isArray(query) ? query[0] : (query as string));
    }

    // 라우터 쿼리에서 카테고리 업데이트
    if (routerCategory) {
      setSelectedCategory(Array.isArray(routerCategory) ? routerCategory[0] : (routerCategory as string));
    }
  }, [query, routerCategory, router.isReady]);

  useEffect(() => {
    if (!router.isReady || !searchTerm) return;

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/search?query=${searchTerm}&category=${selectedCategory || ''}`);
        if (!res.ok) throw new Error('검색 결과를 불러오는 데 실패했습니다.');

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [searchTerm, selectedCategory, router.isReady]);

  const handleSearch = (term: string): void => {
    if (!term.trim()) return;

    // URL을 새 검색 매개변수로 업데이트
    router.push(`/search/searchresultpage?query=${encodeURIComponent(term)}&category=${encodeURIComponent(selectedCategory)}`, undefined, {
      shallow: true,
    });

    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);

    // 검색어가 있다면 새 카테고리로 검색 업데이트
    if (searchTerm) {
      router.push(`/search/searchresultpage?query=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(category)}`, undefined, {
        shallow: true,
      });
    }
  };

  return (
    <div>
      {/* 개선된 SearchBar 컴포넌트 사용 */}
      <SearchBar
        isResultPage={true}
        initialSearchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        showCategories={true}
      />

      <h1 className='mx-4 mt-4 text-xl font-bold'>"{searchTerm}" 검색 결과</h1>

      {loading && <p className='mx-4 mt-2'>검색 중...</p>}
      {error && <p className='mx-4 mt-2 text-red-500'>{error}</p>}

      {!loading &&
        !error &&
        (posts.length > 0 ? (
          <ul className='mx-4 mt-2'>
            {posts.map((post) => (
              <li key={post.id} className='py-2 border-b'>
                {post.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className='mx-4 mt-4'>검색 결과가 없습니다.</p>
        ))}
    </div>
  );
}

SearchResultsPage.getLayout = (page: ReactNode) => {
  return (
    <>
      <BottomBar>{page}</BottomBar>
    </>
  );
};
