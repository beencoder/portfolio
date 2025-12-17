import Filter from 'badwords-ko';

const customBadWords = [
  '토토',
  '카지노',
  '바카라',
  '대출',
  'https://',
  'http://',
  'www.',
  '졷',
  '좃',
  '좇',
  '좉',
  '좈',
];

const filter = new Filter();

filter.addWords(customBadWords);

export function checkBadWord(text) {
  if (!text) return false;

  // badWord -> '**' 변환
  try {
    const cleaned = filter.clean(text);
    if (cleaned !== text) return true;
  } catch (e) {
    return false;
  }

  // 공백 제거 후 한 번 더 검사
  const noSpaceText = text.replace(/\s/g, '');
  const isCustomBad = customBadWords.some((word) => noSpaceText.includes(word));

  return isCustomBad;
}
