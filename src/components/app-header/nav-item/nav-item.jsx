import styles from './nav-item.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavItem = ({icon, active, path, children}) => {
  
  const isActive = (active === 'primary') ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive';
  
  return (
    <li className={`${styles.item} pr-4`}>
      <Link className={`${styles.link} pl-5 pr-5`} to={`${path}`}>  
          {icon}
          <p className={`${isActive} pl-2`}>{children}</p>
      </Link>
    </li>
  );
}    

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  active: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default NavItem;