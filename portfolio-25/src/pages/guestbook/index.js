import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { MessageCircleMore, MessageCircleHeart, Sparkles, HeartPulse, Ghost } from 'lucide-react';

import styles from '@/styles/pages/guestbook/guestbook.module.scss';
import SectionTitle from '@/components/ui/section-title';
import { PostDetailModal } from '@/components/ui/guestbook/guestbook-modal';
import GuestbookForm from '@/components/ui/guestbook/guestbook-form';

export default function GuestbookPage() {
  const [messages, setMessages] = useState([]);
  const [activeMessage, setActiveMessage] = useState(null);
  const [announce, setAnnounce] = useState('');
  const detailModalId = activeMessage ? `guestbook-detail-${activeMessage.id}` : null;

  // 데이터 불러오기
  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/guestbook');
      const result = await res.json();

      if (result.success) {
        const formattedData = result.data.map((item) => ({
          id: item._id,
          author: item.name,
          content: item.message,
          createdAt: item.createdAt,
          password: item.password || null,
        }));
        setMessages(formattedData);
      }
    } catch (error) {
      console.error('Failed to fetch messages', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 메시지 추가
  const handleAddMessage = async (data) => {
    try {
      const res = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: data.author?.trim() || '익명',
          content: data.content.trim(),
          password: data.password,
        }),
      });

      const result = await res.json();

      if (result.success) {
        await fetchMessages(); // 목록 다시 불러오기
        setAnnounce('새로운 방명록이 등록되었습니다.');
      } else {
        alert(result.error || '등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error adding message:', error);
      alert('오류가 발생했습니다.');
    }
  };

  const handleOpenDetail = (message) => setActiveMessage(message);
  const handleCloseDetail = () => setActiveMessage(null);

  // 메시지 삭제
  const handleDeleteMessage = async (id) => {
    try {
      const res = await fetch('/api/guestbook', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();

      if (result.success) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
        setAnnounce('방명록이 삭제되었습니다.');
        if (activeMessage?.id === id) setActiveMessage(null);
      } else {
        alert('삭제에 실패했습니다.');
        setAnnounce('삭제 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <section className={clsx('section', styles.guestbook)} aria-labelledby="guestbook-title">
      <div className={clsx('container', styles.layout)}>
        <header className={styles.header}>
          <p className={styles['page-title']}>Guestbook</p>
          <SectionTitle id="guestbook-title" className={styles.title} mode="fix">
            <span>Leave a Mark</span>
          </SectionTitle>
          <div className={styles.description}>
            <p>
              <MessageCircleMore className="text-icon" aria-hidden="true" />
              회원가입 없이 자유롭게 코멘트를 남겨주세요
            </p>
            <p>
              <MessageCircleHeart className="text-icon" aria-hidden="true" />
              따뜻한 응원이나 피드백은 저에게 큰 힘이 됩니다
              <Sparkles className="text-icon" aria-hidden="true" />
            </p>
          </div>
        </header>

        <div className={styles.contents}>
          <section className={styles['form-section']} aria-label="방명록 작성">
            <div className={styles.formContainer}>
              <GuestbookForm onSubmit={handleAddMessage} />
            </div>

            <ul className={styles['notice-list']}>
              <li>개인정보(실명, 전화번호 등)는 남기지 말아주세요.</li>
              <li>욕설 및 비방 글은 예고 없이 삭제될 수 있습니다.</li>
            </ul>
          </section>

          <section className={styles['list-section']} aria-label={`총 ${messages.length}개의 방명록이 있습니다.`}>
            <div className={styles['list-header']}>
              <h2 className={styles['count-title']}>
                Total <strong>{messages.length}</strong> Messages
              </h2>
            </div>

            {messages.length === 0 ? (
              <div className={styles.empty}>
                <Ghost size={80} strokeWidth={1.5} className={styles['empty-icon']} aria-hidden="true" />
                <p>아직 남겨진 코멘트가 없어요.</p>
                <p>첫 번째 주인공이 되어보세요!</p>
              </div>
            ) : (
              <ul className={styles.list}>
                {messages.map((message) => (
                  <li key={message.id} className={styles.item}>
                    <article className={styles['msg-card']}>
                      <header className={styles['card-header']}>
                        <p id={`message-${message.id}-author`} className={styles.author}>
                          <span aria-hidden="true">🐧</span>
                          <span>{message.author}</span>
                        </p>

                        <time className={styles.date} dateTime={message.createdAt}>
                          {new Date(message.createdAt).toLocaleString('ko-KR', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </time>
                      </header>

                      <p className={styles.preview}>
                        {message.content.length > 80 ? `${message.content.slice(0, 80)}…` : message.content}
                      </p>

                      <button
                        type="button"
                        className={styles['more-btn']}
                        onClick={() => handleOpenDetail(message)}
                        aria-controls={detailModalId}>
                        Read More
                      </button>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

      {/* 상태 변경 알림 */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announce}
      </div>

      {/* 상세 보기 모달 */}
      <PostDetailModal
        id={detailModalId}
        message={activeMessage}
        onClose={handleCloseDetail}
        onDelete={handleDeleteMessage}
      />
    </section>
  );
}
