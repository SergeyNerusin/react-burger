import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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

  React.useEffect(() => {
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
      </ModalOverlay>  
    </>,
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