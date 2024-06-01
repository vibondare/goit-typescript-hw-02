import Modal from "react-modal";
import css from "./ImageModal.module.css"

export default function ImageModal({ imageData, isOpen, onClose }) {
  Modal.setAppElement(document.getElementById(`${imageData.id}`));


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
        <img src={imageData.urls.regular} alt={imageData.alt_description} className={css.image} />
    </Modal>
  );
}
