import React from 'react';
import SectionIng from './SectionIng/SectionIng';
import styles from './BurgerIngredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/type';
import PropTypes from 'prop-types';


const BurgerIngredients = ({data, openModal}) => {
  const [current, setCurrent] = React.useState('Булки');

  return (
    <article className={styles.ingredients + ' mt-10'}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className={styles.tabs + ' mt-5 mb-10'}>
        <li>
          <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={styles.container}>
        <SectionIng data={data} openModal={openModal} typeIng={'bun'}>Булки</SectionIng>
        <SectionIng data={data} openModal={openModal} typeIng={'sauce'}>Соусы</SectionIng>
        <SectionIng data={data} openModal={openModal} typeIng={'main'}>Начинки</SectionIng>
      </div>
    </article>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired
};

export default BurgerIngredients