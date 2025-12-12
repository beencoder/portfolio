import mongoose from 'mongoose';

// 게스트북 데이터 구조 정의
const GuestbookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '닉네임이 필요합니다.'],
    maxlength: [20, '닉네임은 20자를 넘길 수 없습니다.'],
  },
  message: {
    type: String,
    required: [true, '메시지 내용을 입력해주세요.'],
    maxlength: [300, '메시지 내용은 300자를 넘길 수 없습니다.'],
  },
  password: {
    type: String,
    required: [true, '비밀번호(PIN)는 필수입니다.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Guestbook || mongoose.model('Guestbook', GuestbookSchema);
