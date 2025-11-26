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
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const titleId = useId();

  // 클라이언트에서만 portal 렌더
  useEffect(() => {
    setMounted(true);
  }, []);

  // 스크롤락 적용
  useScrollLock(isOpen);

  // 포커스트랩 + ESC로 닫기
  useFocusTrap(containerRef, isOpen, {
    initial: 'first',
    onEscape: () => {
      if (typeof onClose === 'function') onClose();
    },
  });

  if (!mounted || !isOpen) return null;

  const handleOverlayClick = () => {
    if (!closeOnOverlay) return;
    onClose?.();
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
    <div className={styles.dimmed} onClick={handleOverlayClick}>
      <div
        ref={containerRef}
        className={clsx(styles.modal, styles[`modal-${size}`], styles[`type-${type}`])}
        onClick={(e) => e.stopPropagation()}
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
