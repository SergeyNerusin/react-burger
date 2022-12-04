import React from 'react';
import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';
import { Input, 
         EmailInput, 
         PasswordInput, 
         Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { userLogout,
         changeDataUser } from '../../services/store/actions/action-user-auth';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export default function ProfilePage(){

  const dispatch = useDispatch();

  // const [form, setValue] = React.useState({name: '', email: '', password:''});
  const  { form, onChange, setValues } = useForm({name: '', email: '', password:''});

  const { name, email } = useSelector(state => state.userAuth.user); 
  
  
  React.useEffect(
    () => {
      setValues({
        name: name, 
        email: email,
        password: '' 
      });
    }, 
  // eslint-disable-next-line 
  [name, email]);

  // const onChange = (e) => {
  //   setValue({...form, [e.target.name]: e.target.value});
  // };

  // Изменить данные профиля пользователя
  const changeUserData = (e) => {
    e.preventDefault();
    const {name, email, password} = form;
    if(name && email && password){
      dispatch(changeDataUser(form));
    }
  };
  
  //отмена изменений данных профиля
  // const handleResetForm = () => {
  //   setValue({name: name , email: email, password: ''});
  // };
  const handleResetForm = () => {
    setValues({name: name , email: email, password: ''});
  };

  const handleLogoutUser = () => {
    dispatch(userLogout());
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.menu}>
       <ul className={styles.items}>
        <li className={styles.item}>
          <NavLink to='/profile' 
            className={styles.itemLink + ' text text_type_main-medium text_color_inactive'}
            activeClassName={styles.itemActive}>Профиль
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/profile/orders' 
            className={styles.itemLink + ' text text_type_main-medium text_color_inactive'}
            activeClassName={styles.itemActive}>История заказов
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to='/login' onClick={handleLogoutUser}
            className={styles.itemLink + ' text text_type_main-medium text_color_inactive'}
            activeClassName={styles.itemActive}>Выход  
          </NavLink>
        </li>
       </ul>
       <p className='text text_type_main-default text_color_inactive mt-20'>
          В этом разделе вы можете изменить свои персональные данные
       </p> 
      </nav>
      <div>
        <form className={styles.form} onSubmit={changeUserData}>
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
      </div>
    </div>
  );
}