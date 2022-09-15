import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './Modal.module.css'; 
import ModalOverlay from './ModalOverlay/ModalOverlay'; 


const Modal = ({show, onClose, ...props}) => {
  const closeOnEscapeKeyDown = evt => {
    if (evt.key === 'Escape') {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  return show && ReactDOM.createPortal(
    <>
      <div className={style.overlay} onClick={onClose}>
        <div className={style.container} onClick={e => e.stopPropagation()}>
          <CloseIcon type="primary" onClick={onClose}/>
          {props.children}
        </div>
      </div>
    </>,
    document.getElementById("popup")
  );
};

export default Modal;