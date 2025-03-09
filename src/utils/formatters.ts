// utils/formatters.ts
export const formatBirth = (value: string): string => {
  // 숫자만 남기기
  const cleaned = value.replace(/\D/g, '');

  // 최대 8자리로 제한
  const truncated = cleaned.slice(0, 8);

  // 포맷팅
  if (truncated.length <= 4) {
    return truncated;
  } else if (truncated.length <= 6) {
    return `${truncated.slice(0, 4)}-${truncated.slice(4)}`;
  } else {
    return `${truncated.slice(0, 4)}-${truncated.slice(4, 6)}-${truncated.slice(6)}`;
  }
};

export const formatPhoneNumber = (value: string): string => {
  // 숫자만 남기기
  const cleaned = value.replace(/\D/g, '');

  // 최대 11자리로 제한
  const truncated = cleaned.slice(0, 11);

  // 포맷팅
  if (truncated.length <= 3) {
    return truncated;
  } else if (truncated.length <= 7) {
    return `${truncated.slice(0, 3)}-${truncated.slice(3)}`;
  } else {
    return `${truncated.slice(0, 3)}-${truncated.slice(3, 7)}-${truncated.slice(7)}`;
  }
};
