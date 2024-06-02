import Modal from "react-modal";
import css from "./ImageModal.module.css"
import { unsplashImageData } from "../../images-api";

type Props = {
  imageData: unsplashImageData;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ imageData, isOpen, onClose }: Props) {
  Modal.setAppElement(document.getElementById(`${imageData.id}`) as HTMLElement);


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
