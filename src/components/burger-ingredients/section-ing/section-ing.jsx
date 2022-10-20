import Ingredient from '../ingredient/ingredient';
import style from './section-ing.module.css';
import ingredientType from '../../../utils/type';
import PropTypes from 'prop-types';


const SectionIng = ({listIngr, scrollToRef, children}) => { 
     
  return (
    <section className={style.section + ' mt-10'} ref={scrollToRef}>
      <h2 className='text text_type_main-medium'>{children}</h2>
      <ul className={style.items + ' mt-6'}>
        { listIngr.map(ing => <Ingredient data={ing} key={ing._id}/>)}
      </ul>
    </section>
  );
} 

SectionIng.propTypes = {
  listIngr: PropTypes.arrayOf(ingredientType).isRequired,
  scrollToRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default SectionIng;

