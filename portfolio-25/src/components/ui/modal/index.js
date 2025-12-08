import { useState, useId, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { X } from 'lucide-react';

import { pushModal, removeModal, findModalIndex } from '@/lib/modalStack';
import useScrollLock from '@/hooks/useScrollLock';
import useFocusTrap from '@/hooks/useFocusTrap';
import styles from '@/styles/components/modal.module.scss';

export default function Modal({
  type = 'default',
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlay = true,
  hideCloseButton = false,
  ariaLabel,
  bodyClassName,
  footer,
}) {
  const [isClient, setIsClient] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [stackIndex, setStackIndex] = useState(-1);
  const containerRef = useRef(null);
  const modalIdRef = useRef(`modal-${Math.random().toString(36).slice(2, 9)}`);
  const titleId = useId();
  const BASE_Z = 1200;

  // 클라이언트에서만 portal 렌더
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 모달이 열릴 경우 컴포넌트 DOM 마운트 시작
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  // 마운트되면 애니메이션을 위해 isActive(true) 설정
  useEffect(() => {
    if (!isMounted || !isOpen) return;
    const raf = requestAnimationFrame(() => setIsActive(true));
    return () => cancelAnimationFrame(raf);
  }, [isMounted, isOpen]);

  // 스택 등록
  useEffect(() => {
    if (!isMounted) return;

    const id = modalIdRef.current;

    const onOverlay = () => {
      if (typeof onClose === 'function') onClose();
    };

    const idx = pushModal(id, {
      closeOnOverlay,
      onOverlay,
      onClose,
      onCloseGetter: () => onClose,
    });

    setStackIndex(idx);

    const handleStackChange = () => {
      setStackIndex(findModalIndex(id));
    };
    window.addEventListener('modal-stack-changed', handleStackChange);

    return () => {
      window.removeEventListener('modal-stack-changed', handleStackChange);
      removeModal(id);
    };
  }, [isMounted, closeOnOverlay, onClose]);

  useEffect(() => {
    if (!isMounted) return;
    if (!isOpen) {
      const id = modalIdRef.current;
      removeModal(id);
      setStackIndex(-1);
    }
  }, [isOpen, isMounted]);

  // 스크롤 락 & 포커스트랩 적용
  useScrollLock(isMounted);
  useFocusTrap(containerRef, isMounted, {
    initial: 'first',
    onEscape: () => {
      if (typeof onClose === 'function') onClose();
    },
  });

  if (!isClient || !isMounted) return null;

  const idx = stackIndex >= 0 ? stackIndex : 0;
  const modalZ = BASE_Z + idx * 2 + 1;

  // 모달 transition 완료 시 DOM 언마운트 처리
  const handleModalTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;
    if (!isOpen) {
      setIsMounted(false);
    }
  };

  const dialogProps = { role: 'dialog', 'aria-modal': 'true' };
  if (title) dialogProps['aria-labelledby'] = titleId;
  else if (ariaLabel) dialogProps['aria-label'] = ariaLabel;

  const modalNode = (
    <div
      ref={containerRef}
      className={clsx(styles.modal, styles[`modal-${size}`], styles[`type-${type}`], {
        [styles['is-active']]: isActive,
      })}
      onClick={(e) => e.stopPropagation()}
      onTransitionEnd={handleModalTransitionEnd}
      {...dialogProps}
      style={{ zIndex: modalZ }}>
      {(title || !hideCloseButton) && (
        <header className={styles.header}>
          {title && (
            <h1 id={titleId} className={styles.title}>
              {title}
            </h1>
          )}
          {!hideCloseButton && (
            <button type="button" className={styles['close-btn']} onClick={onClose} aria-label="닫기">
              <span className={styles['btn-icon']}>
                <X className="icon" aria-hidden />
              </span>
            </button>
          )}
        </header>
      )}

      <div className={clsx(styles.body, bodyClassName)}>{children}</div>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );

  const root = typeof document !== 'undefined' ? document.getElementById('modal-root') || document.body : null;
  if (!root) return null;
  return createPortal(modalNode, root);
}
