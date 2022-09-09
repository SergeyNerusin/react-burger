import NavItem from './NavItem/NavItem';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './AppHeader.module.css';

const AppHeader = () => {
  return (
     <header className={headerStyles.header}>
      <nav className={`${headerStyles.menu} pb-4 pt-4`}>
        <ul className={headerStyles.items}>
          <NavItem  icon={<BurgerIcon type={"primary"} />} text={'Конструктор'} url={'#'}/>
          <NavItem  icon={<ListIcon type={"secondary"} />} text={'Лента заказов'} url={'#'}/>      
        </ul>
        <Logo />
        <ul className={headerStyles.items}>
          <NavItem  icon={<ProfileIcon type={"secondary"} />} text={'Личный кабинет'} url={'#'}/> 
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;