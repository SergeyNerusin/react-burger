import NavItem from './nav-item/nav-item';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';
import { useLocation } from 'react-router-dom';
 
const AppHeader = () => {
  const location = useLocation();
  return (
    <header className={`${headerStyles.header} ml-10 mt-10 mr-10`}>
      <nav className={`${headerStyles.menu} pb-4 pt-4`}>
        <ul className={headerStyles.items}>
          <NavItem  icon={<BurgerIcon 
                    type={location.pathname === '/' ? 'primary': 'secondary'} />}
                    active={location.pathname === '/' ? 'primary': 'secondary'}  
                    path={'/'}>Конструктор
          </NavItem>
          <NavItem  icon={<ListIcon 
                    type={location.pathname === '/profile/orders' ? 'primary': 'secondary'} />} 
                    active={location.pathname === '/profile/orders' ? 'primary': 'secondary'}
                    path={'/profile/orders'}>Лента заказов
          </NavItem>      
        </ul>
        <div className='Logo'>
           <Logo />
        </div>
        <ul className={headerStyles.items}>
          <NavItem  icon={<ProfileIcon 
                    type={location.pathname === '/profile' ? 'primary': 'secondary'}/>}
                    active = {location.pathname === '/profile' ? 'primary': 'secondary'} 
                    path={'/profile'}>Личный кабинет
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;