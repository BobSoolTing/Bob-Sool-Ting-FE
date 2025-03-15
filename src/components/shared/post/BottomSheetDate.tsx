import React, { ReactNode, useState, useCallback } from 'react';
import BottomSheet from './BottomSheet';
import Calendar from 'react-calendar';
import { usePostFormStore } from '@/stores/post-form';

interface BottomSheetDateProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  height: string;
  onClose: () => void;
}

/** 캘린더 관련 타입 */
type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

export default function BottomSheetDate({ className, isOpen, onClose, height }: BottomSheetDateProps) {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
  const { updateFormData } = usePostFormStore();

  // 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
  const formatDateToString = useCallback((date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  // 날짜 선택 핸들러
  const handleDateChange = useCallback(
    (date: SelectedDate) => {
      setSelectedDate(date);

      if (date instanceof Date) {
        updateFormData('date', formatDateToString(date));
        onClose();
      }
    },
    [formatDateToString, updateFormData, onClose]
  );

  // 캘린더 네비게이션 레이블 포맷 함수
  const formatNavigationLabel = useCallback(({ date }: { date: Date }) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  }, []);

  // 일자의 "1일" -> "1"로 변경하는 함수
  const formatDay = useCallback((locale: string | undefined, date: Date) => {
    return date.getDate().toString();
  }, []);

  return (
    <BottomSheet height={height} className={className} isOpen={isOpen} onClose={onClose}>
      <div className='calendar-container mt-8 mb-8'>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          navigationLabel={formatNavigationLabel}
          showNavigation={true}
          showNeighboringMonth={true}
          nextLabel='>'
          next2Label={null}
          prevLabel='<'
          prev2Label={null}
          formatDay={formatDay}
          calendarType='gregory'
        />
      </div>
    </BottomSheet>
  );
}
