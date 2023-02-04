import React, { useEffect } from 'react';
import styles from './profile.module.css';
import { Switch, Route, NavLink, useLocation } from 'react-router-dom';

import { Input, 
         EmailInput, 
         PasswordInput, 
         Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { userLogout,
         changeDataUser, 
         tokenRefresh, 
         getDataUser } from '../../services/store/actions/action-user-auth';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { OrdersHistory } from '../../components/orders-history/orders-history';
import { OrderInfo } from '../../components/ordrer-info/order-info';
import { getCookie } from '../../utils/cookie';
import { Tlocation } from '../../utils/type';

const ProfilePage: React.FC = () =>{

  const dispatch = useDispatch();
  const location = useLocation<Tlocation>();
  console.log('ProfilePage location', location);
  const background = location.state?.background; 

  const refreshToken = localStorage.getItem('refreshToken');
  const cookie = getCookie('token');

  const  { form, onChange, setValues } = useForm({name: '', email: '', password:''});

  const { name, email } = useSelector(state => state.userAuth.user); 
  
  
  useEffect(
    () => {
      setValues({
        name: name, 
        email: email,
        password: '' 
      });
    },[name, email, setValues]);
  
  useEffect(() =>{
    if (!cookie && refreshToken) {
      dispatch(tokenRefresh());
    }
    if (cookie && refreshToken) {
      dispatch(getDataUser());
    }
   },[dispatch, cookie, refreshToken]);   

  // Изменить данные профиля пользователя
  const changeUserDataForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {name, email, password} = form;
    if(name && email && password){
      dispatch(changeDataUser(form));
    }
  };
  
  const handleResetForm = () => {
    setValues({name: name , email: email, password: ''});
  };

  const handleLogoutUser = () => {
    dispatch(userLogout());
  };

  return (
    <article className={styles.profile} aria-label="Профиль пользователя">
      <nav className={styles.menu}>
       <ul className={styles.items}>
        <li className={styles.item}>
          <NavLink to='/profile' exact={true}
            className={styles.link + ' text text_type_main-medium text_color_inactive'}
            activeClassName={styles.linkActive + ' text text_type_main-medium text_color_inactive'}>Профиль
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/profile/orders' exact={true}
            className={styles.link + ' text text_type_main-medium text_color_inactive'}
            activeClassName={styles.linkActive + ' text text_type_main-medium text_color_inactive'}>История заказов
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/login' onClick={handleLogoutUser}
            className={styles.link + ' text text_type_main-medium text_color_inactive'}
            activeClassName={styles.linkActive + ' text text_type_main-medium text_color_inactive'}>Выход  
          </NavLink>
        </li>
       </ul>
       <p className='text text_type_main-default text_color_inactive mt-20'>
          В этом разделе вы можете изменить свои персональные данные
       </p> 
      </nav>
      <div>
        <Switch location={background || location}>
          <Route path='/profile/orders' exact={true}>
            <OrdersHistory/>
          </Route>
          <Route path='/profile/orders/:id' exact={true}>
            <OrderInfo/>
          </Route>
          <Route path='/profile'>
            <form className={styles.form} onSubmit={changeUserDataForm}>
              <div className='mb-6'>
                <Input
                  type='text'
                  placeholder='Имя'
                  onChange={onChange}
                  value={form.name}
                  name='name'
                  error={false}
                  size='default'
                  autoComplete='current-name'
                  icon='EditIcon'
                />
              </div>
              <div className='mb-6'>
                <EmailInput
                  onChange={onChange}
                  value={form.email}
                  size = 'default'
                  name='email'
                  autoComplete='current-email'
                  isIcon={true}
                />
              </div>
              <div className='mb-6'>
                <PasswordInput
                  onChange={onChange}
                  value={form.password}
                  name='password'
                  autoComplete='on'
                  icon='EditIcon'
                />
              </div>
              <div className={styles.button}>
                <Button htmlType='reset' type='secondary'
                        size='large' onClick={handleResetForm}>Отмена
                </Button>
                <Button htmlType='submit' type='primary' size='medium'>
                  Cохранить
                </Button>
              </div>
            </form>
         </Route>
        </Switch> 
      </div>
    </article>
  );
}

export default ProfilePage;