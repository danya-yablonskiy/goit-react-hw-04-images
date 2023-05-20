import { useEffect } from 'react';

export const Modal = ({ closeModal, modalImgUrl }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Overlay" onClick={handleOverlayClick || handleKeyDown}>
      <div className="Modal">
        <img src={modalImgUrl} alt="" />
      </div>
    </div>
  );
};
