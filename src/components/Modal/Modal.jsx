import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './Modal.module.css'; 
import {body} from '../../service/constant'
import ModalOverlay from './ModalOverlay/ModalOverlay'; 


const Modal = ({show, onClose, title,...props}) => {
  const closeOnEscapeKeyDown = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keyup', closeOnEscapeKeyDown);
    if(show){ body.style.overflow = 'hidden'; }

    return function cleanup() {
      document.body.removeEventListener('keyup', closeOnEscapeKeyDown);
      body.style.overflow = 'visible';
    };
    // eslint-disable-next-line
  }, [show]);

  return show && ReactDOM.createPortal(
    <>
      <div className={style.overlay} onClick={onClose}>
        <div className={style.container} onClick={evt => evt.stopPropagation()}>
          <div className={style.containerTitle}>
            <h2 className="text text_type_main-large">{title}</h2>
            <div className={style.cursorBox}> 
              <CloseIcon type="primary" onClick={onClose}/>
            </div>   
          </div>
          {props.children}
        </div>
      </div>
    </>,
    document.getElementById("popup")
  );
};

export default Modal;