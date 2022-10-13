import Ingredient from '../ingredient/ingredient';
import style from './section-ing.module.css';
import ingredientType from '../../../utils/type';
import PropTypes from 'prop-types';

const SectionIng = ({data, typeIng, openModal, scrollToRef,...props}) => {
  return (
    <section className={style.section + ' mt-10'} ref={scrollToRef}>
      <h2 className='text text_type_main-medium'>{props.children}</h2>
      <ul className={style.items + ' mt-6'}>
        { data.filter(ing => ing.type === `${typeIng}`).map(ing => <Ingredient data={ing} key={ing._id} openModal={openModal}/>)}
      </ul>
    </section>
  );
} 

SectionIng.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  typeIng: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export default SectionIng;