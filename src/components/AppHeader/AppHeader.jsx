import NavItem from './NavItem/NavItem';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={`${headerStyles.header} ml-10 mt-10 mr-10`}>
      <nav className={`${headerStyles.menu} pb-4 pt-4`}>
        <ul className={headerStyles.items}>
          <NavItem  icon={<BurgerIcon type={"primary"} />}>Конструктор</NavItem>
          <NavItem  icon={<ListIcon type={"secondary"} />}>Лента заказов</NavItem>      
        </ul>
        <Logo />
        <ul className={headerStyles.items}>
          <NavItem  icon={<ProfileIcon type={"secondary"} />} url={'#'}>Личный кабинет</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;