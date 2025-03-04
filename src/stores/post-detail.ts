import { create } from 'zustand';

// Zustand 스토어 생성
export const usePostDetailStore = create<PostDetailStore>((set) => ({
  postDetail: {
    category: 'Meal Date',
    nickname: '',
    rating: 0,
    gender: 'MAN',
    createdAt: '',
    department: '',
    studentNumber: 0,
    birth: '',
    likeCount: 0,
    title: '',
    content: '',
    location: '',
    date: '',
    max_participants: 0,
    participants: [],
    comment: [],
  },

  // 포스트 상세 정보 부분 업데이트
  updatePostDetail: (partialData) =>
    set((state) => ({
      postDetail: { ...state.postDetail, ...partialData },
    })),

  // 포스트 상세 정보 초기화
  resetPostDetail: () =>
    set({
      postDetail: {
        category: 'Meal Date',
        nickname: '',
        rating: 0,
        gender: 'MAN',
        createdAt: '',
        department: '',
        studentNumber: 0,
        birth: '',
        likeCount: 0,
        title: '',
        content: '',
        location: '',
        date: '',
        max_participants: 0,
        participants: [],
        comment: [],
      },
    }),

  // 좋아요 수 증가
  incrementLikeCount: () =>
    set((state) => ({
      postDetail: { ...state.postDetail, likeCount: state.postDetail.likeCount + 1 },
    })),

  // 좋아요 수 감소 (0 미만으로 내려가지 않도록 함)
  decrementLikeCount: () =>
    set((state) => ({
      postDetail: {
        ...state.postDetail,
        likeCount: Math.max(0, state.postDetail.likeCount - 1),
      },
    })),

  // 참가자 추가 (이미 있는 참가자는 추가하지 않고, 최대 참가자 수 제한 체크)
  addParticipant: (userId) =>
    set((state) => {
      // 이미 참가 중이거나 최대 인원에 도달한 경우 추가하지 않음
      if (!state.postDetail.participants.includes(userId) && state.postDetail.participants.length < state.postDetail.max_participants) {
        return {
          postDetail: {
            ...state.postDetail,
            participants: [...state.postDetail.participants, userId],
          },
        };
      }
      return state;
    }),

  // 참가자 제거
  removeParticipant: (userId) =>
    set((state) => ({
      postDetail: {
        ...state.postDetail,
        participants: state.postDetail.participants.filter((id) => id !== userId),
      },
    })),

  // 댓글 추가
  addComment: (comment) =>
    set((state) => ({
      postDetail: {
        ...state.postDetail,
        comment: [...state.postDetail.comment, comment],
      },
    })),

  // 댓글 제거
  removeComment: (commentId) =>
    set((state) => ({
      postDetail: {
        ...state.postDetail,
        comment: state.postDetail.comment.filter((c) => c.id !== commentId),
      },
    })),
}));

// 포스트 상세 정보를 위한 인터페이스 정의
export interface IPostDetail {
  category: 'Meal Date' | 'Drink Date' | 'Group Meeting'; // 카테고리 (밥약, 술약, 과팅)
  nickname: string; // 작성자 닉네임
  rating: number; // 평점
  gender: 'MAN' | 'WOMAN'; // 성별
  createdAt: string; // 작성 일시
  department: string; // 학과
  studentNumber: number; // 학번
  birth: string; // 생년월일
  likeCount: number; // 좋아요 수
  title: string; // 게시글 제목
  content: string; // 게시글 내용
  location: string; // 장소
  date: string; // 약속 날짜
  max_participants: number; // 최대 참가자 수
  participants: string[]; // 참가자 목록
  comment: Comment[]; // 댓글 목록
}

// 댓글을 위한 인터페이스 정의
interface Comment {
  id: string; // 댓글 고유 ID
  userId: string; // 댓글 작성자 ID
  content: string; // 댓글 내용
  createdAt: string; // 댓글 작성 시간
}

// 스토어 인터페이스 정의
interface PostDetailStore {
  postDetail: IPostDetail; // 포스트 상세 정보

  // 기본 액션
  updatePostDetail: (partialData: Partial<IPostDetail>) => void; // 포스트 상세 정보 부분 업데이트
  resetPostDetail: () => void; // 포스트 상세 정보 초기화

  // 특정 업데이트 메소드
  // -> 수정 예정(좋아요 / 댓글은 다른거 쓸 수도 있음)!!!!!!!!!!!!
  incrementLikeCount: () => void; // 좋아요 수 증가
  decrementLikeCount: () => void; // 좋아요 수 감소
  addParticipant: (userId: string) => void; // 참가자 추가
  removeParticipant: (userId: string) => void; // 참가자 제거
  addComment: (comment: Comment) => void; // 댓글 추가
  removeComment: (commentId: string) => void; // 댓글 제거
}
