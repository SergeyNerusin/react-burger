import style from './order-details.module.css';
import takeInWork from '../../../images/done.jpg';
import PropTypes from 'prop-types';


const OrderDetails = ({orderNumber}) => {
  
return (
    <>
      <h2 className="text text_type_digits-large mb-8">{orderNumber}</h2>
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
  orderNumber: PropTypes.number.isRequired,
};

export default OrderDetails; 