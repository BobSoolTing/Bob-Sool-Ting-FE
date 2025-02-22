export function getRating(ratingNumber: number): string {
  if (ratingNumber >= 91 && ratingNumber <= 100) {
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
