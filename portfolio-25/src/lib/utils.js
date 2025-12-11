// 비밀번호를 SHA-256으로 해시
export async function hashPassword(password) {
  if (!password) return null;

  const msgBuffer = new TextEncoder().encode(password); // 바이트로 변환
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer); // SHA-256 알고리즘으로 해시 생성
  // 바이트 배열을 16진수 문자열로 변환
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}
