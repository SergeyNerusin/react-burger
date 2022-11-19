import React, { useCallback } from 'react';
import styles from './register.module.css';
import {Input, EmailInput, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector, useDispatch } from 'react-redux';
import { userDataForm, userRegistration } from '../../services/store/actions/action-user-auth';
import { useHistory } from 'react-router-dom';


export default function RegisterPage(){
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const  form = useSelector(state => state.userAuth.form);
  const {name, email, password} = form;
  
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 10);
  };

  const onChange = e => {
    dispatch(userDataForm(e.target.name, e.target.value));
  };
    
  function submitFormUserRegister(e){
    e.preventDefault();
    if(name && email && password){
      dispatch(userRegistration(form)); // запрос на регистрацию пользователя
    }
  }; 
   
  const handleLogin = useCallback(
    () => {
            history.replace({ pathname: '/login' });
    },[history]
  ); 

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={submitFormUserRegister}>
        <h2 className='text text_type_main-medium mb-6'>Регистрация</h2>
        <div className='mb-6'>
          <Input
						type='text'
						placeholder='Имя'
						onChange={onChange}
						value={name}
						name='name'
						error={false}
						size='default'
            ref={inputRef}
            onIconClick={onIconClick}
            icon='EditIcon'
					/>
        </div>
        <div className='mb-6'>
          <EmailInput
            onChange={onChange}
            value={email}
            size = 'default'
            name='email'
            autoComplete='new-email'
            isIcon={true}
          />
        </div>
        <div className='mb-6'>
          <PasswordInput
            onChange={onChange}
            value={password}
            name={'password'}
            autoComplete='new-password'
            icon='ShowIcon'
          />
        </div>
        <div className='p-0 mb-20'>
          <Button htmlType='submit' type='primary' size='medium' >Зарегестрироваться</Button>
        </div>
      </form> 
      <div>
        <span className='text text_type_main-default text_color_inactive pr-2'>Уже зарегистрированы?</span>
        <button className={styles.button + ' text text_type_main-default' } type='button' onClick={handleLogin}>Войти
        </button>
      </div>
    </div>
  );
}
