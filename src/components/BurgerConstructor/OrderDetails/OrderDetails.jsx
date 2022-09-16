import PropTypes from 'prop-types';
import style from './OrderDetails.module.css';
import takeInWork from '../../../images/done.png';

const OrderDetails = ({order}) => {

  return(
    <>
      <h2 className="text text_type_digits-large mb-8">{order.id}</h2>
      <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
      <div className={style.imgcontainer + ' mb-15'}>
         <img className={style.img} src={takeInWork} alt="Готовим заказ"/>
      </div>
      <span className="text text_type_main-default mb-2">Ваш заказ начали готовить</span>
      <span className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</span>
    </>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.object.isRequired  
}

export default OrderDetails; 