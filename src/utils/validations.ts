// utils/validations.ts
export const validateUniversity = (university: string): { isValid: boolean; errorMessage: string } => {
  const universityRegex = /^[a-zA-Z가-힣]{4,16}$/;
  return {
    isValid: universityRegex.test(university),
    errorMessage: '대학교는 4~16자의 한글 또는 영문자만 가능합니다.',
  };
};

export const validateDepartment = (department: string): { isValid: boolean; errorMessage: string } => {
  const departmentRegex = /^[a-zA-Z가-힣]{4,16}$/;
  return {
    isValid: departmentRegex.test(department),
    errorMessage: '학과는 4~16자의 한글 또는 영문자만 가능합니다.',
  };
};

export const validateStudentNumber = (studentNumber: string): { isValid: boolean; errorMessage: string } => {
  const studentNumberRegex = /^\d{6,10}$/;
  return {
    isValid: studentNumberRegex.test(studentNumber),
    errorMessage: '학번은 6~10자의 숫자만 가능합니다.',
  };
};

export const validateNickname = (nickname: string): { isValid: boolean; errorMessage: string } => {
  const nicknameRegex = /^[a-zA-Z0-9가-힣]{2,8}$/;
  return {
    isValid: nicknameRegex.test(nickname),
    errorMessage: '닉네임은 2~8자의 한글, 영문, 숫자만 가능합니다.',
  };
};

export const validateBirth = (birth: string): { isValid: boolean; errorMessage: string } => {
  const birthRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthRegex.test(birth)) {
    return {
      isValid: false,
      errorMessage: '생년월일은 YYYY-MM-DD 형식이어야 합니다.',
    };
  }

  const [year, month, day] = birth.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  const isValid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

  return {
    isValid,
    errorMessage: isValid ? '' : '유효하지 않은 날짜입니다.',
  };
};
