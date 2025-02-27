// hooks/usePostForm.ts
import { useState } from 'react';

// BottomSheet 타입 정의
export type BottomSheetType = 'place' | 'date' | 'personnel' | null;

export const usePostForm = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [activeSheet, setActiveSheet] = useState<BottomSheetType>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    place: '',
    date: '',
    personnel: '',
  });

  // BottomSheet 열기 함수
  const openBottomSheet = (type: BottomSheetType) => {
    setActiveSheet(type);
  };

  // BottomSheet 닫기 함수
  const closeBottomSheet = () => {
    setActiveSheet(null);
  };

  // 폼 데이터 업데이트 함수
  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // 모든 필수 필드가 채워졌는지 확인
    const { title, content, place, date, personnel } = {
      ...formData,
      [field]: value,
    };

    setIsComplete(Boolean(title && content && place && date && personnel));
  };

  return {
    isComplete,
    activeSheet,
    formData,
    openBottomSheet,
    closeBottomSheet,
    updateFormData,
  };
};
