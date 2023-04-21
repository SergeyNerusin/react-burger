import { fetchUserRegistration, 
         fetchUserAuthorization,
         fetchLogoutUser,
         fetchGetDataUser,
         fetchChangeDataUser,
         fetchForgotPassword,
         fetchNewPassword,
         fetchTokenRefresh } from "../../../utils/auth-api";
import { setCookie, deleteCookie } from '../../../utils/cookie';
import { AppDispatch, AppThunk } from "../types-store";

/* для регистрации пользователя */ 
export const FORM_DATA_USER_REGISTRATION = 'FORM_DATA_USER_REGISTRATION';
export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTERATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTERATION_ERROR'; 

type TUser = {
    name: string, email: string 
}

interface IFormDataUserRegistratuion {
	readonly type: typeof FORM_DATA_USER_REGISTRATION;
  name: string;
  value: string;
}

interface IRequestUserRegistratuion {
	readonly type: typeof REQUEST_USER_REGISTRATION;
}

interface IUserRegistratuionSucces {
	readonly type: typeof USER_REGISTRATION_SUCCESS ;
}
interface IUserRegistratuionError {
	readonly type: typeof USER_REGISTRATION_ERROR;
}


/* для авторизации пользователя */ 
export const  FORM_AUTHORIZATION_USER = 'FORM_AUTHORIZATION_USER';
export const  AUTHORIZATION_REQUERST_USER = 'AUTHORIZATION_REQUERST_USER';
export const  AUTHORIZATION_USER_SUCCESS = 'AUTHORIZATION_USER_SUCCESS';
export const  AUTHORIZATION_USER_ERROR = 'AUTHORIZATION_USER_ERROR';

interface IFormAuthorizationUser {
	readonly type: typeof FORM_AUTHORIZATION_USER;
  name: string;
  value: string;
}

interface IAuthorizationRequestUser {
	readonly type: typeof AUTHORIZATION_REQUERST_USER;
}

interface IAuthorizationUserSucces {
	readonly type: typeof AUTHORIZATION_USER_SUCCESS;
  payload: TUser;
}

interface IAuthorizationUserError {
	readonly type: typeof AUTHORIZATION_USER_ERROR;
}


/* для выхода пользователя */
export const USER_LOGOUT_REQUEST =  'USER_LOGOUT_REQUEST';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR';

interface IUserLogoutRequest {
	readonly type: typeof USER_LOGOUT_REQUEST;
}

interface ILogoutUserSucces {
  readonly type: typeof LOGOUT_USER_SUCCESS;
  payload: string;
}

interface ILogoutUserError {
	readonly type: typeof LOGOUT_USER_ERROR;
}


/* для запроса данных о пользователе */
export const GET_DATA_USER_REQUEST = 'GET_DATA_USER_REQUEST';
export const GET_DATA_USER_SUCCESS = 'GET_DATA_USER_SUCCESS';
export const GET_DATA_USER_ERROR = 'GET_DATA_USER_ERROR';

interface IGetDataUserRequest {
	readonly type: typeof GET_DATA_USER_REQUEST ;
}

interface IGetDataUserSucces {
  readonly type: typeof GET_DATA_USER_SUCCESS;
  payload: TUser;
}

interface IGetDataUserError {
	readonly type: typeof GET_DATA_USER_ERROR;
}

/* для изменения данных о пользователе */ 
export const UPDATE_DATA_USER_REQUEST = 'UPDATE_DATA_USER_REQUEST';
export const UPDATE_DATA_USER_SUCCESS = 'UPDATE_DATA_USER_SUCCESS';
export const UPDATE_DATA_USER_ERROR = 'UPDATE_DATA_USER_ERROR';

interface IUpdateDataUserRequest {
	readonly type: typeof UPDATE_DATA_USER_REQUEST ;
}

interface IUpdateDataUserSucces {
  readonly type: typeof UPDATE_DATA_USER_SUCCESS;
  payload: TUser
}

interface IUpdateDataUserError {
	readonly type: typeof UPDATE_DATA_USER_ERROR;
}

/* для запроса на восстановления пароля */ 
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

interface IForgotPasswordRequest {
	readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

interface IForgotPasswordSuccess {
	readonly type: typeof FORGOT_PASSWORD_SUCCESS;
	payload: string;
}

interface IForgotPasswordError {
	readonly type: typeof FORGOT_PASSWORD_ERROR;
}

/* сброс старого и задание нового проля */ 
export const NEW_PASSWORD_FORM = 'NEW_PASSWORD_FORM';
export const NEW_PASSWORD_REQUEST = 'NEW_PASSWORD_REQUEST';
export const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_ERROR = 'NEW_PASSWORD_ERROR';

interface INewPasswordForm {
	readonly type: typeof NEW_PASSWORD_FORM;
  name: string;
  value: string;
}

interface INewPasswordRequest {
	readonly type: typeof NEW_PASSWORD_REQUEST;
}

interface INewPasswordSuccess {
	readonly type: typeof NEW_PASSWORD_SUCCESS;
	payload: string;
}

interface INewPasswordError {
	readonly type: typeof NEW_PASSWORD_ERROR;
}

/* запрос на обновления токена */
export const TOKEN_REFRESH_REQUEST = 'TOKEN_REFRESH_REQUEST';
export const TOKEN_REFRESH_SUCCESS = 'TOKEN_REFRESH_SUCCESS';
export const TOKEN_REFRESH_ERROR = 'TOKEN_REFRESH_ERROR';

interface ITokenRefreshRequest {
	readonly type: typeof TOKEN_REFRESH_REQUEST;
}

interface ITokenRefreshSuccess {
	readonly type: typeof TOKEN_REFRESH_SUCCESS;
	
}

interface ITokenRefreshError {
	readonly type: typeof TOKEN_REFRESH_ERROR;
}


export type TUserAuthActions = 
IFormDataUserRegistratuion
| IRequestUserRegistratuion
| IRequestUserRegistratuion
| IUserRegistratuionSucces
| IUserRegistratuionError
| IFormAuthorizationUser
| IAuthorizationRequestUser
| IAuthorizationUserSucces
| IAuthorizationUserError
| IUserLogoutRequest
| ILogoutUserSucces
| ILogoutUserError
| IGetDataUserRequest
| IGetDataUserSucces
| IGetDataUserError
| IUpdateDataUserRequest
| IUpdateDataUserSucces
| IUpdateDataUserError
| IForgotPasswordRequest
| IForgotPasswordSuccess
| IForgotPasswordError
| INewPasswordForm
| INewPasswordRequest
| INewPasswordSuccess
| INewPasswordError
| ITokenRefreshRequest 
| ITokenRefreshSuccess 
| ITokenRefreshError



/* ФУНКЦИИ ЭКШЕНЫ: */ 

/* для регистрации пользователя */ 
export const userDataForm = (name: string, value: string) =>{
  return {
      type: FORM_DATA_USER_REGISTRATION,
      name, 
      value
    };
}

export const userRegistration: AppThunk = (form) => {
  return function(dispatch: AppDispatch){
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
export const userloginForm = (name: string, value: string) => {
  return { 
    type:FORM_AUTHORIZATION_USER,
    name,
    value
  }
}

export const userLogin: AppThunk = (form) => {
  return function(dispatch: AppDispatch){
    dispatch({
     type: AUTHORIZATION_REQUERST_USER
    });
    fetchUserAuthorization(form)
      .then(res => { 
        if(res && res.success){
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
export const userLogout: AppThunk = () => {
  return  function(dispatch: AppDispatch) {
    dispatch({
      type: USER_LOGOUT_REQUEST
    });
    fetchLogoutUser()
    .then(res => {
      if(res && res.success){
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
export const getDataUser: AppThunk = () => {
  return function(dispatch: AppDispatch){
    dispatch({
      type: GET_DATA_USER_REQUEST 
    });
    fetchGetDataUser()
    .then(res => {
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
    .catch((res) => {
      dispatch({
      type: GET_DATA_USER_ERROR 
    });
    if(res ==='Ошибка: 403'){
      deleteCookie('token');
    } 
    });
  }; 
}

/* для изменения данных о пользователе */
export const changeDataUser: AppThunk = (form) => {
  return function(dispatch: AppDispatch){
    dispatch({
      type: UPDATE_DATA_USER_REQUEST
    });
    fetchChangeDataUser(form)
    .then(res => {
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

/* запрос для восстановления пароля */
export const forgotPassword: AppThunk = (email: string) => {
  return function(dispatch: AppDispatch){
    dispatch({
      type: FORGOT_PASSWORD_REQUEST
    });
    fetchForgotPassword(email)
    .then(res => {
      if(res && res.success){
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: res.message
        });
      } else {
        dispatch({
          type: FORGOT_PASSWORD_ERROR
        });
      }
    })
    .catch(() => {
      dispatch({
       type: FORGOT_PASSWORD_ERROR
      });
   });
  }; 
} 

/* новый пароль */
export const newPasswordForm = (name: string, value: string) =>{
  return { 
    type:NEW_PASSWORD_FORM,
    name,
    value
  };
} 

export const newPassword: AppThunk = (form) => {
  return function(dispatch: AppDispatch){
    dispatch({
      type: NEW_PASSWORD_REQUEST
    });
    fetchNewPassword(form)
    .then(res => {
      if(res && res.success){
        dispatch({
          type: NEW_PASSWORD_SUCCESS,
          payload: res.message
        });
      } else {
        dispatch({
          type: NEW_PASSWORD_ERROR
        });
      }
    })
    .catch(() => {dispatch({
          type: NEW_PASSWORD_ERROR
       });
    });
  }; 
} 

/* для обновления токена */
export const tokenRefresh: AppThunk = () => {
  return function(dispatch: AppDispatch){
    dispatch({
      type: TOKEN_REFRESH_REQUEST
    });
    fetchTokenRefresh()
    .then(res => {
      if(res && res.success){
        const accessToken = res.accessToken.split('Bearer ')[1];
        setCookie('token', accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch({
          type: TOKEN_REFRESH_SUCCESS,
        });
      } else {
        dispatch({
          type: TOKEN_REFRESH_ERROR
        });
      }
    })
    .catch((res) => {dispatch({
          type: TOKEN_REFRESH_ERROR
       });
    });
  }; 
}
  

