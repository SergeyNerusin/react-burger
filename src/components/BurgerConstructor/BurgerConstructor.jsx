import style from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/type';
import PropTypes from 'prop-types';

function BurgerConstructor({data}) {
  return (
    <article className={style.container + ' pl-4'}>
      
    </article>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
};

export default BurgerConstructor