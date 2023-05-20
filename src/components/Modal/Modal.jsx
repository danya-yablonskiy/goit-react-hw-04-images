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

// export class Modal extends Component {
// componentDidMount() {
//   window.addEventListener('keydown', this.handleKeyDown);
// }

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.handleKeyDown);
// }

// handleKeyDown = e => {
//   if (e.code === 'Escape') {
//     this.props.closeModal();
//   }
// };

// handleOverlayClick = e => {
//   if (e.target === e.currentTarget) {
//     this.props.closeModal();
//   }
// };

// render() {
//   return (
//     <div
//       className="Overlay"
//       onClick={this.handleOverlayClick || this.handleKeyDown}
//     >
//       <div className="Modal">
//         <img src={this.props.modalImgUrl} alt="" />
//       </div>
//     </div>
//   );
// }
// }
