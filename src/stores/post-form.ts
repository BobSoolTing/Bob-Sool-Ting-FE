import { create } from 'zustand';

// BottomSheet 타입 정의에 category 추가
export type BottomSheetType = 'place' | 'date' | 'personnel' | 'category' | null;

interface PostFormState {
  isComplete: boolean;
  activeSheet: BottomSheetType;
  formData: {
    title: string;
    content: string;
    location: string;
    date: string;
    max_participants: number;
    category: 'BOB' | 'SOOL' | 'TING' | '카테고리를 선택해 주세요';
    recruitment_status: 'RECRUITING';
  };
  openBottomSheet: (type: BottomSheetType) => void;
  closeBottomSheet: () => void;
  updateFormData: (field: string, value: string) => void;
  resetFormData: () => void; // 리셋 메소드 추가
}

export const usePostFormStore = create<PostFormState>((set) => ({
  isComplete: false,
  activeSheet: null,
  formData: {
    title: '',
    content: '',
    location: '만남 장소를 입력해 주세요',
    date: '약속 날짜를 선택해 주세요',
    max_participants: 999,
    category: '카테고리를 선택해 주세요',
    recruitment_status: 'RECRUITING',
  },

  // BottomSheet 열기 함수
  openBottomSheet: (type: BottomSheetType) => set({ activeSheet: type }),

  // BottomSheet 닫기 함수
  closeBottomSheet: () => set({ activeSheet: null }),

  // 폼 데이터 업데이트 함수
  updateFormData: (field: string, value: string) =>
    set((state) => {
      const newFormData = {
        ...state.formData,
        [field]: value,
      };

      // 모든 필수 필드가 채워졌는지 확인 (category 포함)
      const { title, content, location, date, max_participants, category } = newFormData;
      const isComplete = Boolean(
        title &&
          content &&
          location !== '만남 장소를 입력해 주세요' &&
          date !== '약속 날짜를 선택해 주세요' &&
          max_participants !== 999 &&
          category !== '카테고리를 선택해 주세요'
      );

      return {
        formData: newFormData,
        isComplete,
      };
    }),

  // 폼 데이터 리셋 함수
  resetFormData: () =>
    set({
      isComplete: false,
      formData: {
        title: '',
        content: '',
        location: '만남 장소를 입력해 주세요',
        date: '약속 날짜를 선택해 주세요',
        max_participants: 999,
        category: '카테고리를 선택해 주세요',
        recruitment_status: 'RECRUITING',
      },
    }),
}));
