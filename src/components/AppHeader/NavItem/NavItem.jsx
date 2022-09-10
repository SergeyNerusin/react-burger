import styles from './NavItem.module.css';

const NavItem = ({icon, ...props}) => {
  return(
    <li className={`${styles.item} pr-4`}>
        <a className={`${styles.link} pl-5 pr-5`} href={'/#'}>
            {icon}
            <p className={"text text_type_main-default text_color_inactive pl-2"}>{props.children}</p>
        </a>
    </li>
  );
}

export default NavItem;