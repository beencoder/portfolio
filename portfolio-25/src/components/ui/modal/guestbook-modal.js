import { useEffect, useId, useRef, useState } from 'react';
import clsx from 'clsx';

import styles from '@/styles/pages/guestbook/guestbook-modal.module.scss';
import Modal from '@/components/ui/modal/index';
import { hashPassword } from '@/lib/utils';

export function PostDetailModal({ message, onClose, onDelete }) {
  const titleId = useId();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  if (!message) return null;

  const openDelete = () => setIsDeleteOpen(true);
  const closeDelete = () => setIsDeleteOpen(false);

  const handleConfirmedDelete = (id) => {
    onDelete?.(id);
    setIsDeleteOpen(false);
    onClose?.();
  };

  return (
    <>
      <Modal
        type="default"
        size="md"
        isOpen={!!message}
        onClose={onClose}
        title="메시지 상세 보기"
        ariaLabel={`방명록 ${message.author}님의 메시지 상세 내용`}
        footer={
          <div className={styles['modal-actions']}>
            <button type="button" className={styles.btn} onClick={openDelete} aria-label="이 글 삭제하기">
              삭제하기
            </button>
            <button type="button" className={clsx(styles.btn, styles.close)} onClick={onClose}>
              닫기
            </button>
          </div>
        }>
        <article className={styles.detail} aria-labelledby={titleId}>
          <header className={styles['detail-header']}>
            <div className={styles['profile-area']}>
              <span className={styles.emoji} aria-hidden="true">
                🐧
              </span>
              <div className={styles.info}>
                <h3 id={titleId} className={styles.author}>
                  {message.author}
                </h3>
                <time className={styles.date} dateTime={message.createdAt}>
                  {new Date(message.createdAt).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>
              </div>
            </div>
          </header>

          <div className={styles['contents']}>
            <p className={styles.content}>{message.content}</p>
          </div>
        </article>
      </Modal>

      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={closeDelete}
        messageId={message.id}
        expectedHash={message.passwordHash}
        onConfirm={handleConfirmedDelete}
      />
    </>
  );
}

function DeleteConfirmModal({ isOpen, onClose, messageId, expectedHash, onConfirm }) {
  const formId = useId();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setValue('');
      setError('');
      setIsProcessing(false);
      setShake(false);

      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setValue(e.target.value.replace(/\D/g, '').slice(0, 4));
    if (error) setError('');
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!/^\d{4}$/.test(value)) {
      setError('숫자 4자리로 입력해 주세요.');
      triggerShake();
      inputRef.current?.focus();
      return;
    }

    if (!expectedHash) {
      setError('삭제 권한이 없거나 데모 데이터입니다.');
      return;
    }

    setIsProcessing(true);

    try {
      const inputHash = await hashPassword(value);

      if (inputHash === expectedHash) {
        onConfirm?.(messageId);
      } else {
        setError('비밀번호가 일치하지 않습니다.');
        triggerShake();
        setValue('');
        inputRef.current?.focus();
      }
    } catch (err) {
      setError('오류가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Modal
      type="default"
      size="md"
      isOpen={isOpen}
      onClose={onClose}
      title="삭제 확인"
      ariaLabel="삭제 비밀번호 입력"
      footer={
        <div className={styles['modal-actions']}>
          <button type="button" className={clsx(styles.btn, styles.close)} onClick={onClose}>
            취소
          </button>
          <button type="submit" form={formId} className={styles.btn} disabled={isProcessing || value.length < 4}>
            {isProcessing ? '확인 중...' : '삭제하기'}
          </button>
        </div>
      }>
      <form id={formId} onSubmit={handleSubmit} className={styles['delete-form']}>
        <p className={styles['delete-desc']}>
          글 작성 시 설정했던 <strong>비밀번호 4자리</strong>를 입력해 주세요.
        </p>

        <div className={styles.field}>
          <label htmlFor={`delete-pw-${formId}`} className={styles.label}>
            비밀번호
          </label>
          <input
            id={`delete-pw-${formId}`}
            ref={inputRef}
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={value}
            onChange={handleChange}
            className={clsx(styles.input, {
              [styles.invalid]: error,
              [styles.shake]: shake,
            })}
            placeholder="숫자 4자리"
            autoComplete="one-time-code"
            disabled={isProcessing}
            aria-invalid={!!error}
            aria-describedby={`delete-error-${formId}`}
          />
          <div className={styles['error-container']}>
            {error && (
              <p id={`delete-error-${formId}`} role="alert" className={styles.error}>
                {error}
              </p>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
