import React, { useCallback } from "react";
import style from './profile.module.css';
import { NavLink } from "react-router-dom";
import {Input, EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from "react-router-dom";

import { fetchUserRegistration } from "../../services/api/api";
import { setCookie } from "../../utils/cookie";

export default function ProfilePage(){

  const history = useHistory();
  
  const [form, setValue] = React.useState({name:'', email:'', password:''});

  const onChange = (e)=> {
    setValue({...form, [e.target.name]: e.target.value});
  };

  // Изменить данный пользователя
  const changeUserData = (e) => {
    e.preventDefault();

  };
  
  //отмена изменений данных профиля
  const handleResetForm = () => {
    setValue({name:'', email:'', password:''});
  };


 
  // const handleLogin = useCallback(
  //   () => {
  //       history.replace({ pathname: '/login' });
  //   },
  //   [history]
  // ); 

  return (
    <div className={style.wrapper}>
      <nav className={style.menu}>
       <ul className={style.items}>
        <li className={style.item}>
          <NavLink to='/profile' 
            className={style.itemLink + ' text text_type_main-medium text_color_inactive'}
            activeClassName={style.itemActive}> 
           Профиль
          </NavLink>
         
        </li>
        <li className={style.item}>
          <NavLink to='/profile/orders' 
            className={style.itemLink + ' text text_type_main-medium text_color_inactive'}
            activeClassName={style.itemActive}>
            История заказов
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to='/login' 
            className={style.itemLink + ' text text_type_main-medium text_color_inactive'}
            activeClassName={style.itemActive}>
            Выход  
          </NavLink>
        </li>
       </ul>
       <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
       </p> 
      </nav>
      <div>
        <form className={style.form} onSubmit={changeUserData}>
          <div className="mb-6">
            <Input
              type={'text'}
              placeholder={'Имя'}
              onChange={onChange}
              value={form.name}
              name={'name'}
              error={false}
              size={'default'}
              icon={'EditIcon'}
            />
          </div>
          <div className="mb-6">
            <EmailInput
              onChange={onChange}
              value={form.email}
              size = 'default'
              name={'email'}
              autoComplete='on'
              isIcon={true}
            />
          </div>
          <div className="mb-6">
            <PasswordInput
              onChange={onChange}
              value={form.password}
              name={'password'}
              autoComplete='on'
              icon={'EditIcon'}
            />
          </div>
          <div className={style.button}>
            <Button htmlType={"reset"} type={"secondary"} 
                    size="large" onClick={handleResetForm}>
                  Отмена
            </Button>
            <Button htmlType="submit" type="primary" size="medium">
              Cохранить
            </Button>
          </div>
        </form> 
      </div>
    </div>
  );
}