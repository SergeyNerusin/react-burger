import styles from './nav-item.module.css';
import PropTypes from 'prop-types';

const NavItem = ({icon, active, ...props}) => {

  const isActive = (active === "primary") ? "text text_type_main-default" : "text text_type_main-default text_color_inactive";
 
  return(
    <li className={`${styles.item} pr-4`}>
      <a className={`${styles.link} pl-5 pr-5`} href={'/#'}>
          {icon}
          <p className={`${isActive} pl-2`} >{props.children}</p>
      </a>
    </li>
  );
}

NavItem.propTypes = {
  icon: PropTypes.object.isRequired,
  active: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default NavItem;