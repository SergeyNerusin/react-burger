import React, { useCallback } from 'react';
import styles from './login.module.css';
import { EmailInput, 
         PasswordInput, 
         Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';         
import { Redirect, useLocation, useHistory } from 'react-router-dom';
import { userloginForm, userLogin } from '../../services/store/actions/action-user-auth'; 
import { getCookie } from '../../utils/cookie';

export default function LoginPage(){
  const dispatch = useDispatch(); 
  const form = useSelector(state => state.userAuth.form);
  const { email, password } = form; 
  
  const history = useHistory();
  const location = useLocation();
  const cookie = getCookie('token');

  const onChange = e => {
    dispatch(userloginForm(e.target.name, e.target.value));
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

  function submitFormAuthorizationUser(e){
    e.preventDefault();
    if (email && password){
      dispatch(userLogin(form)); //запрос на авторизацию пользователя
    }
  }

  if(cookie){
    return (<Redirect to={ location.state?.from || '/' }/>);
  }

  return (
    <div className={styles.wrapper}>
     <form className={styles.form} onSubmit={submitFormAuthorizationUser}>
      <h2 className='text text_type_main-medium mb-6'>Вход</h2>
        <div className='mb-6'>
          <EmailInput
            onChange={onChange}
            value={email}
            size = 'default'
            name={'email'}
            isIcon={false}
          />
        </div>
        <div className='mb-6'>
          <PasswordInput
            onChange={onChange}
            value={password}
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
      <div>
        <span className='text text_type_main-default text_color_inactive pr-2'>Вы новый пользователь?</span>
          <button className={styles.button + ' text text_type_main-default' } 
                  type='button' 
                  onClick={handleRegisterUser}
                  >Зарегестрироваться
          </button>
      </div>
      <div>
        <span className='text text_type_main-default text_color_inactive pr-2'>Забыли пароль?</span>
          <button className={styles.button + ' text text_type_main-default' } 
                  type='button' 
                  onClick={handleForgotPassword}
                  >Bосстановить пароль
          </button>
      </div>
    </div>
  );
}
