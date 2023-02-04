import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css'; 
import ModalOverlay from './modal-overlay/modal-overlay'; 

type TModal = {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}


const body = document.querySelector('body') as HTMLBodyElement;
const modalRoot = document.getElementById('popup') as HTMLDivElement;  

const Modal: React.FC<TModal> = ({onClose, title, children}) => {
  
  React.useEffect(() => {
  const closeOnEscapeKeyDown = (evt:{key: string}) => {
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
   }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={style.container}>
          <div className={style.containerTitle}>
            {!!title && <h2 className='text text_type_main-large'>{title}</h2>}
            <div className={style.cursorBox}> 
              <CloseIcon type='primary' onClick={onClose}/>
            </div>   
          </div>
          {children} 
        </div>
        <ModalOverlay onClose={onClose}/>
     </>, modalRoot
  );
};

export default Modal;
