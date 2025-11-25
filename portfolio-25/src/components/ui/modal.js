import { useEffect, useId } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';
import useScrollLock from '@/hook/useScrollLock';

import styles from '@/styles/components/modal.module.scss';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlay = true,
  hideCloseButton = false,
  ariaLabel,
  className,
  bodyClassName,
  footer,
}) {
  const titleId = useId();

  // 스크롤락 적용
  useScrollLock(isOpen);

  // ESC로 닫기
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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

  return (
    <div className={styles.dimmed} onClick={handleOverlayClick}>
      <div
        className={clsx(styles.modal, styles[`modal-${size}`], className)}
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
                <X className="icon" aria-hidden />
              </button>
            )}
          </header>
        )}

        <div className={clsx(styles.body, bodyClassName)}>{children}</div>

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </div>
  );
}
