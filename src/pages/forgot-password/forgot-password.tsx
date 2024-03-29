import React, { useCallback } from 'react';
import styles from './forgot-password.module.css';
import {EmailInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../hooks/redux-hoks';
import { Redirect, useLocation, useHistory  } from 'react-router-dom';
import { forgotPassword } from '../../services/store/actions/action-user-auth'; 
import { getCookie } from '../../utils/cookie';
import { useForm } from '../../hooks/useForm';
import { Tlocation } from '../../utils/type';

const ForgotPasswordPage: React.FC = () =>{
  
  const { form, onChange } = useForm({ email:''});

  const dispatch = useDispatch();
  const location = useLocation<Tlocation>();
  const history = useHistory();
  const cookie = getCookie('token');
  
  const forgotPasswordSuccess = useSelector(state => state.userAuth.forgotPasswordSuccess); 

   
  const handleLogin = useCallback(
    () => {
        history.replace({ pathname: '/login' });
    },
    [history]
  ); 

  const submitEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!!form.email){
      dispatch(forgotPassword(form.email));
    }
  }; 
  
  if(forgotPasswordSuccess){
    return(<Redirect to={ '/reset-password' } />);         
  }

  
  if(cookie){
    return (<Redirect to={ location.state?.from || '/' }/>);
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitEmail}>
        <h2 className='text text_type_main-medium mb-6'>Восстановление пароля</h2>
        <div className='mb-6'>
          <EmailInput
            onChange={onChange}
            placeholder='Введите e-mail'
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
        <span className='text text_type_main-default text_color_inactive pr-2'>Вспомнили пароль?</span>
        <button className={styles.button + ' text text_type_main-default' }  onClick={handleLogin}>
            Войти
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
