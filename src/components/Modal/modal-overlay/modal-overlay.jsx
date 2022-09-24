import style from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({onClose, ...props}) => {

  return(
    <div className={style.overlay} onClick={onClose}>
      {props.children}
    </div>
  );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}