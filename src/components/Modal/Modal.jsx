import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css'; 
import {body} from '../../services/constant';
import ModalOverlay from './modal-overlay/modal-overlay'; 


const Modal = ({show, onClose, title, ...props}) => {
  
  React.useEffect(() => {
    
    const closeOnEscapeKeyDown = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  if(show){ 
      document.body.addEventListener('keyup', closeOnEscapeKeyDown);
      body.style.overflow = 'hidden'; 
    }

    return function cleanup() {
      document.body.removeEventListener('keyup', closeOnEscapeKeyDown);
      body.style.overflow = 'visible';
    };
    // eslint-disable-next-line
  }, [show]);

  return show && ReactDOM.createPortal(
    
      <ModalOverlay onClose={onClose}>
        <div className={style.container} onClick={evt => evt.stopPropagation()}>
          <div className={style.containerTitle}>
            <h2 className="text text_type_main-large">{title}</h2>
            <div className={style.cursorBox}> 
              <CloseIcon type="primary" onClick={onClose}/>
            </div>   
          </div>
          {props.children}
        </div>
      </ModalOverlay>,  
      document.getElementById("popup")
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default Modal;