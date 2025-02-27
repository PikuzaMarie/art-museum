import closeIcon from '../../assets/icons/clear-icon.svg';

interface ModalProps {
  imageId: string;
  altText: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ imageId, altText, onClose }) => {
  return (
    <div onClick={onClose}>
      <div>
        <p>{altText}</p>
        <button onClick={onClose}>
          <img src={closeIcon} alt="Close icon" />
        </button>
      </div>
      <div onClick={e => e.stopPropagation()}>
        <img
          src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
          alt="Zoomed artwork image"
        />
      </div>
    </div>
  );
};
