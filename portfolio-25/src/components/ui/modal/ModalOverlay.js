import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from '@/styles/components/modal.module.scss';
import { getTopModal, getModalStack } from '@/lib/modalStack';

export default function ModalOverlay() {
  const [topItem, setTopItem] = useState(getTopModal());
  const [topIndex, setTopIndex] = useState(() => {
    const snap = getModalStack();
    return snap.length ? snap.length - 1 : -1;
  });
  const BASE_Z = 1200;

  useEffect(() => {
    const handler = () => {
      const snap = getModalStack();
      const newTopIndex = snap.length ? snap.length - 1 : -1;
      const newTopItem = snap.length ? snap[newTopIndex] : null;

      setTopIndex(newTopIndex);
      setTopItem(newTopItem);
    };

    window.addEventListener('modal-stack-changed', handler);
    handler();
    return () => window.removeEventListener('modal-stack-changed', handler);
  }, []);

  // 스택이 비어있으면 오버레이를 렌더하지 않음
  if (!topItem || topIndex < 0) return null;

  // overlay z-index는 최상위 모달 바로 아래여야 함
  const overlayZ = BASE_Z + topIndex * 2;
  const pointerEvents = topItem?.closeOnOverlay ? 'auto' : 'none';

  const handleClick = () => {
    if (!topItem?.closeOnOverlay) return;

    if (typeof topItem.onOverlay === 'function') {
      topItem.onOverlay();
    } else if (typeof topItem.onClose === 'function') {
      topItem.onClose();
    } else if (typeof topItem.onCloseGetter === 'function') {
      const fn = topItem.onCloseGetter();
      if (typeof fn === 'function') fn();
    }
  };

  const overlayNode = (
    <div
      className={`${styles.dimmed} ${styles['is-active']}`}
      onClick={handleClick}
      aria-hidden="true"
      style={{ zIndex: overlayZ, pointerEvents }}
    />
  );

  const root = typeof document !== 'undefined' ? document.getElementById('modal-root') || document.body : null;
  if (!root) return null;
  return createPortal(overlayNode, root);
}
