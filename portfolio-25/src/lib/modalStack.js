const modalStack = [];

// 스택 변화 감지
function emitChange() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('modal-stack-changed'));
}

export function pushModal(id, meta = {}) {
  const existing = modalStack.findIndex((m) => m.id === id);
  if (existing !== -1) modalStack.splice(existing, 1); // 기존 제거(재등록시 위치 갱신)
  modalStack.push({ id, ...meta });
  emitChange();
  return modalStack.length - 1;
}

export function removeModal(id) {
  const idx = modalStack.findIndex((m) => m.id === id);
  if (idx !== -1) {
    modalStack.splice(idx, 1);
    emitChange();
  }
  return idx;
}

export function findModalIndex(id) {
  return modalStack.findIndex((m) => m.id === id);
}

export function getTopModal() {
  return modalStack.length ? modalStack[modalStack.length - 1] : null;
}

export function getModalStack() {
  return modalStack.slice();
}

export function getModalCount() {
  return modalStack.length;
}
