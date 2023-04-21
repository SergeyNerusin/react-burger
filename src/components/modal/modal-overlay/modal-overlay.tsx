import React from 'react';
import styles from './modal-overlay.module.css';

type TModalOverlay = {
  onClose: () => void;
}

const ModalOverlay: React.FC<TModalOverlay> = ({onClose}) => {

  return(
    <div className={styles.overlay} onClick={onClose}></div>
  );
}

export default ModalOverlay;


