import React from 'react';
import { ClockIcon, SearchCloseIcon } from '@/assets/icons/SvgIcon';

interface RecentSearchesProps {
  recentSearches: string[];
  onSearchClick: (search: string) => void;
  onDeleteSearch: (index: number) => void;
  onClearAll: () => void;
}

export default function RecentSearches({ recentSearches, onSearchClick, onDeleteSearch, onClearAll }: RecentSearchesProps) {
  return (
    <div className='w-[412px] h-auto relative overflow-hidden'>
      {/* 제목 & 전체 삭제 버튼 (검색 항목이 있을 때만 표시) */}
      <div className='w-[380px] flex justify-between mx-4'>
        <p className='text-base font-bold text-[#1b1b1b]'>최근 검색</p>
        {recentSearches.length > 0 && (
          <p className='text-base text-[#999] cursor-pointer' onClick={onClearAll}>
            전체 삭제
          </p>
        )}
      </div>

      {/* 최근 검색어가 없을 때 메시지 */}
      {recentSearches.length === 0 ? (
        <div className='w-full h-[750px] flex flex-col justify-center items-center py-8 mx-4'>
          <p className='text-xl font-bold text-[#767676]'>최근 검색어 내역이 없습니다.</p>
          <p className='text-sm text-[#999]'>검색어를 입력해 보세요!</p>
        </div>
      ) : (
        // 최근 검색 리스트
        <div className='w-[380px] max-h-[750px] overflow-y-scroll py-2 px-2 mx-4 scrollbar-hidden'>
          {recentSearches.map((search, index) => (
            <div key={index} className='w-[364px] h-8 flex items-center justify-between my-1 cursor-pointer' onClick={() => onSearchClick(search)}>
              <div className='flex items-center'>
                <ClockIcon />
                <span className='text-base text-[#1b1b1b] ml-2'>{search}</span>
              </div>
              <span
                className='cursor-pointer'
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteSearch(index);
                }}
              >
                <SearchCloseIcon />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
