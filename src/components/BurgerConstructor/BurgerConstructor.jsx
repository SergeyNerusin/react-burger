import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/type';
import PropTypes from 'prop-types';

function BurgerConstructor({data}) {
  return (
    <article className={style.container + ' pl-4'}>
       <div className={style.itemlock  + ' pr-4 mt-25 mb-4'}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name + ' (верх)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div className={style.itemlock + ' pr-4'}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[0].name + ' (низ)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div className={style.order + ' pr-4 mt-10'}>
        <div className={style.total + ' mr-10'}>
          <p className="text text_type_digits-medium mr-2">610</p> 
          <CurrencyIcon type="primary" /> 
        </div>
          <Button type="primary" size="large">
            Оформить заказ
         </Button>
      </div>
     </article>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
};

export default BurgerConstructor