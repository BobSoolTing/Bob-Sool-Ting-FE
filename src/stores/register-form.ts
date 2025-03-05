import { create } from 'zustand';

export interface IRegister {
  university: string;
  department: string;
  studentNumber: string;
  nickname: string;
  birth: string;
  gender: 'MAN' | 'WOMAN' | '';
  phone: string;
  mobileCarrier: 'SKT' | 'KT' | 'LGU+' | '';
  verification: number | '';
  profileImage: string | null; // 프로필 이미지 추가
}

interface RegisterStore extends IRegister {
  setUniversity: (university: string) => void;
  setDepartment: (department: string) => void;
  setStudentNumber: (studentNumber: string) => void;
  setNickname: (nickname: string) => void;
  setBirth: (birth: string) => void;
  setGender: (gender: 'MAN' | 'WOMAN' | '') => void;
  setPhone: (phone: string) => void;
  setMobileCarrier: (carrier: 'SKT' | 'KT' | 'LGU+' | '') => void;
  setVerification: (verification: number) => void;
  setProfileImage: (profileImage: string | null) => void; // 프로필 이미지 setter 추가
  resetRegister: () => void;
}

const initialState: IRegister = {
  university: '',
  department: '',
  studentNumber: '',
  nickname: '',
  birth: '',
  gender: '',
  phone: '',
  mobileCarrier: '',
  verification: '',
  profileImage: null, // 초기 상태에 프로필 이미지 추가
};

export const useRegisterStore = create<RegisterStore>((set) => ({
  ...initialState,

  setUniversity: (university) => set({ university }),
  setDepartment: (department) => set({ department }),
  setStudentNumber: (studentNumber) => set({ studentNumber }),
  setNickname: (nickname) => set({ nickname }),
  setBirth: (birth) => set({ birth }),
  setGender: (gender) => set({ gender }),
  setPhone: (phone) => set({ phone }),
  setMobileCarrier: (mobileCarrier) => set({ mobileCarrier }),
  setVerification: (verification) => set({ verification }),
  setProfileImage: (profileImage) => set({ profileImage }), // 프로필 이미지 setter 구현
  resetRegister: () => set(initialState),
}));
