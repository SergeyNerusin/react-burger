import React from 'react';
import {useState, useRef} from 'react';
import SectionIng from './section-ing/section-ing';
import styles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector} from '../../hooks/redux-hoks';
import { TIngredientsType } from '../../utils/type';


const BurgerIngredients: React.FC = () => {

  const bunRef = useRef<HTMLElement>(null);
  const sauceRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null); 
  const refContainer = useRef<HTMLDivElement>(null);
  
  // идём в store, получаем ссылку на массив объектов для отрисовки 
  const data = useSelector(store => store.ingredients.data!);
  
  const [current, setCurrent] = useState('bun');

  const handleMenuScroll = (value:string, scrollToRef: React.RefObject<HTMLElement>) => {
    if(scrollToRef.current !== null){
       scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
       setCurrent(value);
    }
  };

  const handleScroll = () => {
       
    const scrollDis = refContainer.current? refContainer.current.scrollTop + 362: 362;
        
    if((bunRef.current !== null) && bunRef.current.offsetTop <= scrollDis){
      setCurrent('bun');
     } 
    if((sauceRef.current !== null) && sauceRef.current.offsetTop <= scrollDis){
      setCurrent('sauce');
     } 
    if ((mainRef.current !== null) && mainRef.current.offsetTop <= scrollDis){
      setCurrent('main');
     }
  };
  
  // создаём массивы объектов по соответствию ингредиентов
  const buns = React.useMemo(() => data?.filter((item) => item.type === 'bun'),
    [data]
  );

  const sauces = React.useMemo(() => data?.filter((item) => item.type === 'sauce'),
    [data]
  );

  const mains = React.useMemo(() => data?.filter((item) => item.type === 'main'),
    [data]
  );


  return (
    <article className={styles.ingredients + ' mt-10'}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <nav className={styles.tabs + ' mt-5 mb-10'}>
        <li>
          <Tab value='bun' active={current === 'bun'} onClick={(value) => handleMenuScroll(value, bunRef)}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value='sauce' active={current === 'sauce'} onClick={(value) => handleMenuScroll(value, sauceRef)}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value='main' active={current === 'main'} onClick={(value) => handleMenuScroll(value, mainRef)}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={styles.container} onScroll={handleScroll} ref={refContainer}>
        <SectionIng  ingredients = {buns}  scrollToRef={bunRef}>Булки</SectionIng>
        <SectionIng  ingredients  = {sauces} scrollToRef={sauceRef}>Соусы</SectionIng>
        <SectionIng  ingredients  = {mains} scrollToRef={mainRef}>Начинки</SectionIng>
      </div>
    </article>
  );
}

export default BurgerIngredients;