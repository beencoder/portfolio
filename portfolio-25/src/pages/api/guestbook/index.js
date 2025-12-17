import dbConnect from '@/lib/dbConnect';
import { checkBadWord } from '@/lib/wordFilter';
import Guestbook from '../../../../models/Guestbook';

export default async function handler(req, res) {
  const { method } = req;

  // DB 연결
  await dbConnect();

  switch (method) {
    case 'GET': // 조회
      try {
        const guestbooks = await Guestbook.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: guestbooks });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST': // 등록
      try {
        const { author, content, password } = req.body;

        // bad words 적용
        if (checkBadWord(author) || checkBadWord(content)) {
          return res.status(400).json({
            success: false,
            error: '건전한 방명록 문화를 위해 비속어 및 홍보성 문구는 사용할 수 없습니다.',
          });
        }

        const guestbook = await Guestbook.create({
          name: author,
          message: content,
          password: password,
        });
        res.status(201).json({ success: true, data: guestbook });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ success: false, error: 'ID is required' });

        await Guestbook.deleteOne({ _id: id });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
