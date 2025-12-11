import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { MessageCircleMore, MessageCircleHeart, Sparkles, HeartPulse, Ghost } from 'lucide-react';

import styles from '@/styles/pages/guestbook/guestbook.module.scss';
import SectionTitle from '@/components/ui/section-title';
import { PostDetailModal } from '@/components/ui/modal/guestbook-modal';
import GuestbookForm from '@/components/ui/guestbook-form';

const INITIAL_MESSAGES = [
  {
    id: '1',
    author: '익명',
    content:
      '포트폴리오 잘 봤어요! 특히 폼 UX랑 모달 동작이 인상 깊었습니다 포트폴리오 잘 봤어요! 특히 폼 UX랑 모달 동작이 인상 깊었습니다 포트폴리오 잘 봤어요! 특히 폼 UX랑 모달 동작이 인상 깊었습니다',
    createdAt: '2025-12-05T09:00:00+09:00',
    passwordHash: null,
  },
  {
    id: '2',
    author: 'Frontend 구직자',
    content: '구조적인 마크업이 너무 잘 되어 있어서 많이 배워갑니다. 힘나는 포트폴리오였어요!',
    createdAt: '2025-12-05T10:20:00+09:00',
    passwordHash: null,
  },
];

export default function GuestbookPage() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [activeMessage, setActiveMessage] = useState(null);
  const [announce, setAnnounce] = useState('');
  const detailModalId = activeMessage ? `guestbook-detail-${activeMessage.id}` : null;

  const handleAddMessage = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newMessage = {
      id: String(Date.now()),
      author: data.author?.trim() || '익명',
      content: data.content.trim(),
      createdAt: new Date().toISOString(),
      passwordHash: data.passwordHash,
    };

    setMessages((prev) => [newMessage, ...prev]);
    setAnnounce('새로운 방명록이 등록되었습니다.');
  };

  // 더미 해시 설정
  useEffect(() => {
    if (messages.some((m) => m.passwordHash === null)) {
      setMessages((prev) =>
        prev.map((m) => (m.passwordHash === null ? { ...m, passwordHash: 'DEMO_NO_DELETE_HASH' } : m)),
      );
    }
  }, []);

  const handleOpenDetail = (message) => setActiveMessage(message);
  const handleCloseDetail = () => setActiveMessage(null);

  const handleDeleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    setAnnounce('방명록이 삭제되었습니다.');

    if (activeMessage?.id === id) setActiveMessage(null);
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
              <li>개인정보(전화번호 등)는 남기지 말아주세요.</li>
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
