import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/type';
import PropTypes from 'prop-types';

function BurgerConstructor({data, openModal}) {
  return (
    <article className={style.container + ' ml-4'}>
       <div className={style.itemlock  + ' mr-4 mt-25 mb-4'}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name + ' (верх)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div>
        <ul className={style.fillings + ' ml-4'}>
          {data.filter((filling) => filling.type !== 'bun').map((filling) => (
            <li key={filling._id} className={style.item}>
              <span className='mr-2'>
                <DragIcon  type="primary" />
              </span>
              <ConstructorElement
                text={filling.name}
                price={filling.price}
                thumbnail={filling.image}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.itemlock + ' mr-4'}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[0].name + ' (низ)'}
          price={data[0].price}
          thumbnail={data[0].image}
        />
      </div>
      <div className={style.order + ' mr-4 mt-10'}>
        <div className={style.total + ' mr-10'}>
          <p className="text text_type_digits-medium mr-2">610</p> 
          <CurrencyIcon type="primary" /> 
        </div>
          <Button type="primary" size="large" onClick={openModal}> 
            Оформить заказ
          </Button>
      </div>
     </article>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired
};

export default BurgerConstructor