import {useState, useRef} from 'react';
import SectionIng from './section-ing/section-ing';
import styles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientType from '../../utils/type';
import PropTypes from 'prop-types';


const BurgerIngredients = ({data, openModal}) => {
  const [current, setCurrent] = useState('Булки');
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null); 

  const handleScroll = (value, scrollToRef) => {
    setCurrent(value);
    scrollToRef.current.scrollIntoView();
    console.dir(scrollToRef);
  };

  return (
    <article className={styles.ingredients + ' mt-10'}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className={styles.tabs + ' mt-5 mb-10'}>
        <li>
          <Tab value="Булки" active={current === 'Булки'} onClick={() => handleScroll('Булки', bunRef)}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value="Соусы" active={current === 'Соусы'} onClick={() => handleScroll('Соусы', sauceRef)}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value="Начинки" active={current === 'Начинки'} onClick={() => handleScroll('Начинки', mainRef)}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={styles.container}>
        <SectionIng data={data} openModal={openModal} typeIng={'bun'} scrollToRef={bunRef}>Булки</SectionIng>
        <SectionIng data={data} openModal={openModal} typeIng={'sauce'} scrollToRef={sauceRef}>Соусы</SectionIng>
        <SectionIng data={data} openModal={openModal} typeIng={'main'} scrollToRef={mainRef}>Начинки</SectionIng>
      </div>
    </article>
  )
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  openModal: PropTypes.func.isRequired
};

export default BurgerIngredients