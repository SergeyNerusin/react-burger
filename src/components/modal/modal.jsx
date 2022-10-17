import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css'; 
import ModalOverlay from './modal-overlay/modal-overlay'; 


  const Modal = ({onClose, title="", children}) => {
  const body = document.querySelector('body');  
  
  React.useEffect(() => {
  const closeOnEscapeKeyDown = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

      document.body.addEventListener('keyup', closeOnEscapeKeyDown);
    body.style.overflow = 'hidden'; 
   
    return function cleanup() {
      document.body.removeEventListener('keyup', closeOnEscapeKeyDown);
      body.style.overflow = 'visible';
    };
    // eslint-disable-next-line
   }, []);

  return ReactDOM.createPortal(
    <>
      <div className={style.container}>
          <div className={style.containerTitle}>
            <h2 className="text text_type_main-large">{title}</h2>
            <div className={style.cursorBox}> 
              <CloseIcon type="primary" onClick={onClose}/>
            </div>   
          </div>
          {children} 
        </div>
        <ModalOverlay onClose={onClose}/>
     </>,
      document.getElementById("popup")
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default Modal;
