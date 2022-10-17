import Ingredient from '../ingredient/ingredient';
import style from './section-ing.module.css';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const SectionIng = ({typeIng, scrollToRef, children}) => { 
  // идём в store, получаем ссылку на массив объектов для отрисовки 
  const {data} = useSelector(store => store.ingredients);
    
  return (
    <section className={style.section + ' mt-10'} ref={scrollToRef}>
      <h2 className='text text_type_main-medium'>{children}</h2>
      <ul className={style.items + ' mt-6'}>
        { data.filter(ing => ing.type === `${typeIng}`)
          .map(ing => <Ingredient data={ing} key={ing._id}/>)}
      </ul>
    </section>
  );
} 

SectionIng.propTypes = {
  typeIng: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  scrollToRef: PropTypes.object.isRequired
};

export default SectionIng;

