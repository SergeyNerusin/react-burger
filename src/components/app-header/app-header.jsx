import NavItem from './nav-item/nav-item';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import { useLocation } from 'react-router-dom';
 
const AppHeader = () => {
  const location = useLocation();
  return (
    <header className={`${styles.header} ml-10 mt-10 mr-10`}>
      <nav className={`${styles.menu} pb-4 pt-4`}>
        <ul className={`${styles.items} ${styles.items_1}`}>
          <NavItem  icon={<BurgerIcon 
                    type={location.pathname === '/' ? 'primary': 'secondary'} />}
                    active={location.pathname === '/' ? 'primary': 'secondary'}  
                    path={'/'}>Конструктор
          </NavItem>
          <NavItem  icon={<ListIcon 
                    type={location.pathname === '/profile/orders' ? 'primary': 'secondary'} />} 
                    active={location.pathname === '/profile/orders' ? 'primary': 'secondary'}
                    path={'/profile/orders'}>Лента&nbsp;заказов
          </NavItem>      
        </ul>
        <div className={styles.logo}>
           <Logo />
        </div>
        <ul className={styles.items}>
          <NavItem  icon={<ProfileIcon 
                    type={location.pathname === '/profile' ? 'primary': 'secondary'}/>}
                    active = {location.pathname === '/profile' ? 'primary': 'secondary'} 
                    path={'/profile'}>Личный&nbsp;кабинет
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;