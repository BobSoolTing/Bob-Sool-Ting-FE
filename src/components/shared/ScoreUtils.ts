export const calculateGrade = (feedback: string[] = []) => {
  let rating = 50;

  feedback.forEach((fb) => {
    if (fb === '좋아요') rating += 10;
    else if (fb === '보통이에요') rating += 5;
    else if (fb === '별로에요') rating -= 10;
  });

  rating = Math.min(100, Math.max(0, rating));

  let rank: string = 'F';
  if (rating >= 91) rank = 'A+';
  else if (rating >= 81) rank = 'A0';
  else if (rating >= 71) rank = 'B+';
  else if (rating >= 61) rank = 'B0';
  else if (rating >= 51) rank = 'C+';
  else if (rating >= 41) rank = 'C0';
  else if (rating >= 31) rank = 'D+';
  else if (rating >= 21) rank = 'D0';

  return { rating, rank };
};
