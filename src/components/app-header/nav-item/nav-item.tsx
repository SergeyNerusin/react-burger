import React from 'react';
import styles from './nav-item.module.css';
import { Link } from 'react-router-dom';

interface TNavItem<T>{
  icon: T;
  active: string;
  path: string;
  children: string;
}
const NavItem: React.FC<TNavItem<React.ReactNode>> = ({icon, active, path, children}) => {
  
  const isActive = (active === 'primary') ? 'text text_type_main-default' : 'text text_type_main-default text_color_inactive';
  
  return (
    <li className={`${styles.item} pr-2`}>
      <Link className={`${styles.link}  pt-4 pl-5 pb-4 pr-5 `} to={`${path}`}> 
          {icon}
          <p className={`${isActive} pl-2`}>{children}</p>
      </Link>
    </li>
  );
}    


export default NavItem;