import React, { useCallback } from 'react';
import style from './login.module.css';
import {EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { Redirect, useLocation, useHistory } from 'react-router-dom';
import { fetchUserAuthorization } from '../../services/api/api';
import { setCookie, getCookie } from '../../utils/cookie';

export default function LoginPage(){
  const history = useHistory(); 
  const [form, setValue] = React.useState({email:'', password:''});
  const [data, setData] = React.useState({});
  console.log('authorization data:', data);

  const location = useLocation();
  console.log('location:', location); 
  const cookie = getCookie('token');

  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  };

  const handleRegisterUser = useCallback(
    () => {
        history.replace({ pathname: '/register' });
    },
    [history]
  ); 

  const handleForgotPassword = useCallback(
    () => {
        history.replace({ pathname: '/forgot-password' });
    },
    [history]
  ); 

  function authorizationUser(e){
    e.preventDefault();
    const { email, password } = form;
    if (email && password){
      fetchUserAuthorization(form)
      .then(res => {
        if(res && res.success){
          setData(res);
          const accessToken = res.accessToken.split('Bearer ')[1];
          setCookie('token', accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
        } else {
          console.log('Введите Логин и Пароль пользователя');
        } 
    })
    .catch(error => console.log(error.message));
  }
  }

  if(cookie){
    return(<Redirect to={location.state?.from || '/'}/>);
  }

  return (
    <div className={style.wrapper}>
     <form className={style.form} onSubmit={authorizationUser}>
      <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <div className='mb-6'>
          <EmailInput
            onChange={onChange}
            value={form.email}
            size = 'default'
            name={'email'}
            isIcon={false}
          />
        </div>
        <div className='mb-6'>
          <PasswordInput
            onChange={onChange}
            value={form.password}
            name={'password'}
            autoComplete='on'
            icon='ShowIcon'
          />
        </div>
        <div className='mb-20'>
          <Button htmlType='submit' type='primary' size='medium'>
            Войти
          </Button>
        </div>
      </form> 
      <div className='text text_type_main-default text_color_inactive'>
        Вы новый пользователь?
        <Button htmlType='button' type='secondary' size='large' onClick={handleRegisterUser}>Зарегестрироваться</Button>
      </div>
      <div className='text text_type_main-default text_color_inactive'>
        Забыли пароль?
        <Button htmlType='button' type='secondary' size='large' onClick={handleForgotPassword}>Bосстановить пароль</Button>
      </div>
    </div>
  );
}
