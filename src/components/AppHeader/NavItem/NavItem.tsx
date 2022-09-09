import navStyles from './NavItem.module.css';

const NavItem = ({icon, text, url}:{icon: React.ReactNode, text: string, url:string})=>{
  return(
    <li className={`${navStyles.item} pr-4`}>
        <a className={`${navStyles.link} pl-5 pr-5`} href={url}>
            {icon}
            <p className={"text text_type_main-default text_color_inactive pl-2"}>{text}</p>
        </a>
    </li>
  );
}

export default NavItem;