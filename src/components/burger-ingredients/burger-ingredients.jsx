import {useState, useRef} from 'react';
import SectionIng from './section-ing/section-ing';
import styles from './burger-ingredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';


const BurgerIngredients = () => {
  const [current, setCurrent] = useState('bun');
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null); 
  const refContainer = useRef();

  const handleMenuScroll = (pointer, scrollToRef) => {
    scrollToRef.current.scrollIntoView();
    setCurrent(pointer);
  };

  const handleScroll = () => {
        
    let scrollDis = refContainer.current.scrollTop + 362;
    
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

  return (
    <article className={styles.ingredients + ' mt-10'}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <nav className={styles.tabs + ' mt-5 mb-10'}>
        <li>
          <Tab value='bun' active={current === 'bun'} onClick={() => handleMenuScroll('bun', bunRef)}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab value='sauce' active={current === 'sauce'} onClick={() => handleMenuScroll('sauce', sauceRef)}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab value='main' active={current === 'main'} onClick={() => handleMenuScroll('main', mainRef)}>
            Начинки
          </Tab>
        </li>
      </nav>
      <div className={styles.container} onScroll={handleScroll} ref={refContainer}>
        <SectionIng  typeIng={'bun'} scrollToRef={bunRef}>Булки</SectionIng>
        <SectionIng  typeIng={'sauce'} scrollToRef={sauceRef}>Соусы</SectionIng>
        <SectionIng  typeIng={'main'} scrollToRef={mainRef}>Начинки</SectionIng>
      </div>
    </article>
  )
}

export default BurgerIngredients