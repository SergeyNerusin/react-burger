import React, { useCallback } from 'react';
import styles from './reset-password.module.css';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../hooks/redux-hoks';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { newPasswordForm, newPassword } from '../../services/store/actions/action-user-auth';
import { getCookie } from '../../utils/cookie';
import { Tlocation } from '../../utils/type';

 const ResetPasswordPage: React.FC = () => {
  const dispatch = useDispatch();
  const {form, newPasswordSuccess}  = useSelector(state => state.userAuth);
  const { password, token } = form; 
  const history = useHistory();
  const location = useLocation<Tlocation>();
  const cookie = getCookie('token');
  

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(newPasswordForm(e.target.name, e.target.value));
  };

  const handleLogin = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 

  const submitNewPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { password, token} = form;
    if(password && token){
      dispatch(newPassword(form)); 
    }
  };

  if(cookie || newPasswordSuccess){
    return (<Redirect to={ location.state?.from || '/' }/>);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitNewPassword}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <div className='mb-6'>
          <PasswordInput
            onChange={onChange}
            placeholder={'Введите новый пароль'}
            value={password}
            autoComplete='new-password'
            name={'password'}
            icon='ShowIcon'
          />
        </div>
        <div className='mb-6'>
          <Input
						type={'text'}
						placeholder={'Введите код из письма'}
						onChange={onChange}
						value={token}
						name={'token'}
						error={false}
						size={'default'}
					/>
        </div>
        <div>
          <Button htmlType='submit' type='primary' size='medium' >Восстановить</Button>
        </div>
      </form> 
      <div>
        <span className='text text_type_main-default text_color_inactive pr-2'>Вспомнили пароль ?</span>
         <button className={styles.button + ' text text_type_main-default' } 
                  type='button' 
            onClick={handleLogin}>
            Войти
        </button>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
