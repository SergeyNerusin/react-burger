import React from 'react';
import style from './modal-overlay.module.css';

type TModalOverlay = {
  onClose: () => void;
}

const ModalOverlay: React.FC<TModalOverlay> = ({onClose}) => {

  return(
    <div className={style.overlay} onClick={onClose}></div>
  );
}

export default ModalOverlay;


