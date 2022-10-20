import React from 'react';
import {useState, useRef} from 'react';
import SectionIng from './section-ing/section-ing';
import styles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {useSelector} from 'react-redux';


const BurgerIngredients = () => {
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null); 
  const refContainer = useRef();
  
  // идём в store, получаем ссылку на массив объектов для отрисовки 
  const {data} = useSelector(store => store.ingredients);
  
  const [current, setCurrent] = useState('bun');

  const handleMenuScroll = (value, scrollToRef) => {
    scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    setCurrent(value);
  };

  const handleScroll = () => {
        
    const scrollDis = refContainer.current.scrollTop + 362;
    
    if(bunRef.current.offsetTop <= scrollDis){
      setCurrent('bun');
     } 
    if(sauceRef.current.offsetTop <= scrollDis){
      setCurrent('sauce');
     } 
    if (mainRef.current.offsetTop <= scrollDis){
      setCurrent('main');
     }
  };
  
  // создаём массивы объектов по соответствию ингредиентов
  const buns = React.useMemo(() => data.filter((item) => item.type === "bun"),
    [data]
  );

  const sauces = React.useMemo(() => data.filter((item) => item.type === "sauce"),
    [data]
  );

  const mains = React.useMemo(() => data.filter((item) => item.type === "main"),
    [data]
  );


  return (
    <article className={styles.ingredients + ' mt-10'}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
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
        <SectionIng  listIngr = {buns}  scrollToRef={bunRef}>Булки</SectionIng>
        <SectionIng  listIngr = {sauces} scrollToRef={sauceRef}>Соусы</SectionIng>
        <SectionIng  listIngr = {mains} scrollToRef={mainRef}>Начинки</SectionIng>
      </div>
    </article>
  )
}

export default BurgerIngredients