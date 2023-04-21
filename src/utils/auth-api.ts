import { API_URL, AUTH_URL } from './constant';
import { request } from './fetch-request';
import { getCookie } from './cookie';

interface TForm {
  name?: string;
  email: string;
  password: string;
}

type TFormToken = Omit<TForm, 'name' | 'email' > & {
  token:string;
}

// регистрация нового пользователя
export const fetchUserRegistration = (form:TForm) => {
  const { name, email, password } = form; 
  return request(`${API_URL}${AUTH_URL.REGISTER}`,
    { method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        'email': email, 
        'password': password, 
        'name': name
      })
    });
};

// авторизоваться с ранее созданными данными пользователя(логином и паролем)
export const fetchUserAuthorization = (form:TForm) => {
  const { email, password } = form;
  return request( `${API_URL}${AUTH_URL.LOGIN}`,
    { method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          'email': email,
          'password': password
        })
    });
};

// закрытие авторизыции
export const fetchLogoutUser = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  return request(`${API_URL}${AUTH_URL.LOGOUT}`,
    { method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        token: refreshToken
      })
    });
};

// получение данных о пользователе
export const fetchGetDataUser = () => {
  return request(`${API_URL}${AUTH_URL.UPDATING_USER_INFO}`,
    { method: 'GET',
     headers: { Authorization: 'Bearer ' + getCookie('token')}
    });
}; 

// изменение данных о пользователе
export const  fetchChangeDataUser = (form:TForm) => {
  const { name, email, password } = form;
  return request(`${API_URL}${AUTH_URL.UPDATING_USER_INFO}`,
    { method: 'PATCH',
      headers: {
      'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'password': password
      })
    });
};

// запрос на восстановление пароля
export const fetchForgotPassword = (email:string) => {
  return request(`${API_URL}${AUTH_URL.FORGOT_PASSWORD}`,
    { method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': email
      })
    });
}; 

// запрос на смену пароля 
export const fetchNewPassword = async (form:TFormToken) => {
  const {password, token} = form;
  return request (`${API_URL}${AUTH_URL.PASSWORD_RESET}`,
    { method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'password': password,
        'token': token
      })
    });
};

// запрос на обновление токена
export const fetchTokenRefresh = () => {
  const refreshToken = localStorage.getItem('refreshToken');
  return request (`${API_URL}${AUTH_URL.TOKEN}`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'token': refreshToken
    })
  });
};






