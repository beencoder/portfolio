import { useState, useId, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { X } from 'lucide-react';

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
  const containerRef = useRef(null);
  const titleId = useId();

  // 클라이언트에서만 portal 렌더
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 모달이 열릴 경우
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setIsActive(false);
    }
  }, [isOpen]);

  // DOM에 모달이 있다면 is-active
  useEffect(() => {
    if (!isMounted) return;
    if (!isOpen) return;

    const id = requestAnimationFrame(() => {
      setIsActive(true);
    });

    return () => cancelAnimationFrame(id);
  }, [isMounted, isOpen]);

  // 스크롤락 / 포커스트랩 / Esc로 닫기
  useScrollLock(isMounted);
  useFocusTrap(containerRef, isMounted, {
    initial: 'first',
    onEscape: () => {
      if (typeof onClose === 'function') onClose();
    },
  });

  if (!isClient || !isMounted) return null;

  const handleOverlayClick = () => {
    if (!closeOnOverlay) return;
    onClose?.();
  };

  // 모달 transition 관련
  const handleModalTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    // transform 트랜지션이 끝났을 때만
    if (e.propertyName !== 'transform') return;
    if (!isOpen) {
      setIsMounted(false);
    }
  };

  const dialogProps = {
    role: 'dialog',
    'aria-modal': 'true',
  };

  if (title) {
    dialogProps['aria-labelledby'] = titleId;
  } else if (ariaLabel) {
    dialogProps['aria-label'] = ariaLabel;
  }

  const modalNode = (
    <div className={clsx(styles.dimmed, { [styles['is-active']]: isActive })} onClick={handleOverlayClick}>
      <div
        ref={containerRef}
        className={clsx(styles.modal, styles[`modal-${size}`], styles[`type-${type}`], {
          [styles['is-active']]: isActive,
        })}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={handleModalTransitionEnd}
        {...dialogProps}>
        {(title || !hideCloseButton) && (
          <header className={styles.header}>
            {title && (
              <h2 id={titleId} className={styles.title}>
                {title}
              </h2>
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
    </div>
  );

  // 포털
  const root = typeof document !== 'undefined' ? document.getElementById('modal-root') || document.body : null;

  if (!root) return null;

  return createPortal(modalNode, root);
}
