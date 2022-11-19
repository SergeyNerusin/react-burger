
import { fetchUserRegistration, 
         fetchUserAuthorization,
         fetchLogoutUser,
         fetchGetDataUser,
         fetchChangeDataUser } from "../../../utils/auth-api";
import { setCookie, deleteCookie } from '../../../utils/cookie';
          

/* для регистрации пользователя */ 
export const FORM_DATA_USER_REGISTRATION = 'FORM_DATA_USER_REGISTRATION';
export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTERATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTERATION_ERROR'; 

/* для авторизации пользователя */ 
export const  FORM_AUTHORIZATION_USER = 'FORM_AUTHORIZATION_USER';
export const  AUTHORIZATION_REQUERST_USER = 'AUTHORIZATION_REQUERST_USER';
export const  AUTHORIZATION_USER_SUCCESS = 'AUTHORIZATION_USER_SUCCESS';
export const  AUTHORIZATION_USER_ERROR = 'AUTHORIZATION_USER_ERROR';

/* для выхода пользователя */
export const USER_LOGOUT_REQUEST =  'USER_LOGOUT_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';

/* для запроса данных о пользователе */
export const GET_DATA_USER_REQUEST = 'GET_DATA_USER_REQUEST';
export const GET_DATA_USER_SUCCESS = 'GET_DATA_USER_SUCCESS';
export const GET_DATA_USER_ERROR = 'GET_DATA_USER_ERROR';

/* для изменения данных о пользователе */ 
export const UPDATE_DATA_USER_REQUEST = 'UPDATE_DATA_USER_REQUEST';
export const UPDATE_DATA_USER_SUCCESS = 'UPDATE_DATA_USER_SUCCESS';
export const UPDATE_DATA_USER_ERROR = 'UPDATE_DATA_USER_ERROR';

export function userDataForm(name, value){
  return {
      type: FORM_DATA_USER_REGISTRATION,
      name, 
      value
    };
}

export function userRegistration(form){
  return function(dispatch){
    dispatch({
     type: REQUEST_USER_REGISTRATION
    });
    fetchUserRegistration(form)
      .then(res => { 
        if(res && res.success){
          dispatch({
            type: USER_REGISTRATION_SUCCESS
          });
          const accessToken = res.accessToken.split('Bearer ')[1];
          setCookie('token', accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
        } else {
          dispatch({
            type: USER_REGISTRATION_ERROR   
          });
        }
      })
      .catch(() => dispatch({
        type: USER_REGISTRATION_ERROR       
      }));
  };
}


/* для авторизации пользователя */ 
export function userloginForm(name, value){
  return { 
    type:FORM_AUTHORIZATION_USER,
    name,
    value
  }
}

export function userLogin (form){
  return function(dispatch){
    dispatch({
     type: AUTHORIZATION_REQUERST_USER
    });
    fetchUserAuthorization(form)
      .then(res => { 
        if(res && res.success){
          console.log('userLogin res:', res);
          dispatch({
            type: AUTHORIZATION_USER_SUCCESS,
            payload: res.user
          });
          const accessToken = res.accessToken.split('Bearer ')[1];
          setCookie('token', accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
        } else {
          dispatch({
            type: AUTHORIZATION_USER_ERROR 
          });
        }
      })
      .catch(() => dispatch({
          type: AUTHORIZATION_USER_ERROR      
      }));
  };  
}

/* для выхода авторизованного пользователя */ 
export function userLogout(){
  return  function(dispatch) {
    dispatch({
      type: USER_LOGOUT_REQUEST
    });
    fetchLogoutUser()
    .then(res => {
      if(res && res.success){
        console.log('userLogout res:', res);
        deleteCookie('token');
        localStorage.removeItem('refreshToken');
        dispatch({
          type: LOGOUT_USER_SUCCESS,
          payload: res.message
        });
      } else {
         dispatch({
          type: LOGOUT_USER_ERROR
         });
      }
    })
    .catch(() => dispatch({
      type: LOGOUT_USER_ERROR
    }));
  };
} 

/* для запроса данных о пользователе */
export function getDataUser(){
  return function(dispatch){
    dispatch({
      type: GET_DATA_USER_REQUEST 
    });
    fetchGetDataUser()
    .then(res => {
      console.log('getDataUser res:', res);
      if(res && res.success){
        dispatch({
          type: GET_DATA_USER_SUCCESS,
          payload: res.user
        });
      } else {
        dispatch({
         type: GET_DATA_USER_ERROR   
        });
      }
    })
    .catch(() => dispatch({
      type: GET_DATA_USER_ERROR 
    }));
  }; 
}

/* для изменения данных о пользователе */
export function changeDataUser(form){
  return function(dispatch){
    dispatch({
      type: UPDATE_DATA_USER_REQUEST
    });
    fetchChangeDataUser(form)
    .then(res => {
      console.log('changeDataUser res', res.user);
      if(res && res.success){
        dispatch({
          type: UPDATE_DATA_USER_SUCCESS,
          payload: res.user
        });
      } else {
        dispatch({
          type: UPDATE_DATA_USER_ERROR
        });
      }  
    })
    .catch(() => dispatch({
       type: UPDATE_DATA_USER_ERROR
    }));
  };
}
