export interface GradeStyle {
  color: string;
  textColor: string;
}

export interface GradeStyles {
  [key: string]: GradeStyle;
}

export const GRADE_STYLES: GradeStyles = {
  'A+': {
    color: '#4A90E2',
    textColor: '#767676',
  },
  A0: {
    color: '#4A90E2F',
    textColor: '#767676',
  },
  'B+': {
    color: '#00B0B9',
    textColor: '#767676',
  },
  B0: {
    color: '#00B0B9',
    textColor: '#767676',
  },
  'C+': {
    color: '#F8A900',
    textColor: '#767676',
  },
  C0: {
    color: '#F8A900',
    textColor: '#767676',
  },
  'D+': {
    color: '#C0C0C0',
    textColor: '#767676',
  },
  D0: {
    color: '#C0C0C0',
    textColor: '#767676',
  },
  F: {
    color: '#643726',
    textColor: '#767676',
  },
  버그: {
    color: '#000000',
    textColor: '#000000',
  },
};

export function getRating(ratingNumber: number): string {
  if (ratingNumber >= 91 && ratingNumber < 100) {
    return 'A+';
  } else if (ratingNumber >= 81 && ratingNumber <= 90) {
    return 'A0';
  } else if (ratingNumber >= 71 && ratingNumber <= 80) {
    return 'B+';
  } else if (ratingNumber >= 61 && ratingNumber <= 70) {
    return 'B0';
  } else if (ratingNumber >= 51 && ratingNumber <= 60) {
    return 'C+';
  } else if (ratingNumber >= 41 && ratingNumber <= 50) {
    return 'C0';
  } else if (ratingNumber >= 31 && ratingNumber <= 40) {
    return 'D+';
  } else if (ratingNumber >= 21 && ratingNumber <= 30) {
    return 'D0';
  } else if (ratingNumber >= 0 && ratingNumber <= 20) {
    return 'F';
  } else {
    return '버그'; // 0~100 범위를 벗어난 경우
  }
}

// 등급과 스타일을 함께 가져오는 유틸리티 함수
export function getRatingWithStyle(ratingNumber: number): { grade: string; style: GradeStyle } {
  const grade = getRating(ratingNumber);
  const style = GRADE_STYLES[grade];
  return { grade, style };
}
