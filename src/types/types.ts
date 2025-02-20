// types.ts 파일 변경 시 꼭 보고하기

export interface IFeedback {
  _id: string; // 피드백 아이디
  providerId: string; // 피드백 하는 사람 아이디
  receiverId: string; // 피드백 받는 사람 아이디
  postId: string; // 모집 포스트 아이디
  feedback: '좋아요' | '보통이에요' | '별로에요'; // 좋아요, 보통이에요, 별로에요
  createdAt: string; // 피드백 날짜
}

export interface IAlert {
  _id: string; // 알림 아이디
  postId: string; // 해당 포스트 아이디
  content: string; // 알림 내용
  type: 'Apply' | 'Accept' | 'Reject' | 'Like' | 'Comment'; // 알림의 형태
  cratedAt: string; // 생성 날짜
}

export interface ILike {
  _id: string; // 좋아요 아이디
  userId: string; // 유저 아이디
  postId: string; // 포스트 아이디
  cratedAt: string; // 생성 날짜
}

export interface IComment {
  _id?: string; // 좋아요 아이디
  userId: string; // 유저 아이디
  postId: string; // 포스트 아이디
  comment: string; // 댓글 내용
  child?: string[]; // 대댓글 아이디
  cratedAt: string; // 생성 날짜
}

export interface IView {
  _id: string; // 조회 아이디
  userId: string; // 유저 아이디
  postId: string; // 포스트 아이디
  cratedAt: string; // 생성 날짜
}

export interface IReport {
  _id: string; // 신고 아이디
  userId: string; // 유저 아이디
  targetId: string; // 신고 대상 아이디
  reason: string; // 신고 사유
  createdAt: string; // 신고 날짜
}

export interface IApply {
  _id: string; // 신청 아이디
  userId: string; // 신청자 아이디
  postId: string; // 신청한 게시글
  comment: string; // 본인을 어필하는 글 작성
  status: string; // 신청 상태 (수락, 대기, 거절)
  createdAt: string; // 신청 시간
}

export interface IUser {
  _id: string; // 몽고디비에서 자동으로 주어짐 : 0x48fdsajrewq
  loginId: string; // 아이디 : dlgkdud4759
  password: string; // 비밀번호
  nickname: string; // 유저 닉네임
  phone: string; // 전화번호
  gender: string; // 성별 : MAN or WOMAN
  birth: string; // 출생 연월일
  university: string; // 학교
  department: string; // 학과
  studentNumber: number; // 학번
  post: IPost[]; // IPost 타입 -> 아래 포스트 타입과 동일
  like: string[]; // 좋아요 목록
  comment: string[]; // 댓글 목록
  view: string[]; // 조회 목록
  rating: number;
  updatedAt: string; // 유저 정보 수정일
  createdAt: string; // 유저 정보 생성일
}

export interface IPost {
  _id: string; // 포스트 아이디
  userId: string; // 작성자 아이디
  category: 'Meal Date' | 'Drink Date' | 'Group Meeting'; // 카테고리 (밥약, 술약, 과팅)
  title: string; // 글 제목
  content: string; // 소개
  max_participants: number; // 최대 참가자 수 제한
  participants: IUser[]; // 확정된 참가자 목록
  genderlist: 'Man' | 'Woman'; // 작성자의 성별 -> 작성자의 성별이 자동으로 선택됨
  status: 'Open' | 'Closed'; // 포스트 상태 (모집, 완료)
  date: string; // 약속 날짜
  location: string; // 약속 장소
  averageAge: number; // 평균 나이
  peopleNumber: number; // 인원 수
  department: string; // 학과
  studentNumber: number; // 학번
  like: ILike[]; // 좋아요 목록
  comment: IComment[]; // 댓글 목록
  view: string[]; // 조회 목록
  updatedAt: string; // 수정일
  createdAt: string; // 작성일
}

export interface IMatch {
  _id: string; // 매칭 아이디
  hostId: string; // 주선자 아이디
  participants: IUser[]; // 매칭된 유저아이디
  postId: string; // 포스트 아이디
  match_location: string; // 만날 장소
  match_date: string; // 만날 날짜
  status: 'succes' | 'fail'; // 모집 성공 or 실패
  createdAt: string; // 매칭 날짜
}
