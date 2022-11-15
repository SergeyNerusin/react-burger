import React, { useCallback } from 'react';
import style from './forgot-password.module.css';
import {Input, EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import { fetchUserRegistration } from '../../services/api/api';
import { setCookie } from '../../utils/cookie';

export default function ForgotPasswordPage(){
  const history = useHistory();
  const [form, setValue] = React.useState({ email:'' });
  const [data, setData] = React.useState({});

  const onChange = e => {
    setValue({...form, [e.target.name]: e.target.value});
  };
 
  function userRegister(e){
    e.preventDefault();
    console.log('register form:', form);
    console.log('отправка формы');
    const { name, email, password} = form;
    if(name && email && password){
      fetchUserRegistration(form)
      .then(data => { 
        if(data && data.success){
          setData(data);
          const accessToken = data.accessToken.split('Bearer ')[1];
          setCookie('token', accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);

          console.log('Registration data:', data);
        }
      })
      .catch(error => console.log(error.message));
      
    } else {
      console.log('Введите дынные в каждое поле');
    }
  }
   
  const handleLogin = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 

  return (
    <div className={style.wrapper}>
      <form className={style.form} onSubmit={userRegister}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <div className='mb-6'>
          <EmailInput
            onChange={onChange}
            value={form.email}
            size = 'default'
            name={'email'}
            isIcon={false}
          />
        </div>
        <div>
          <Button htmlType='submit' type='primary' size='medium' >Восстановить</Button>
        </div>
      </form> 
      <div>
        <span className='text text_type_main-default text_color_inactive pr-2'>Вспомнили пароль ?</span>
        <Button htmlType='button' type='secondary' 
                size='large' onClick={handleLogin}>
            Войти
        </Button>
      </div>
    </div>
  );
}
