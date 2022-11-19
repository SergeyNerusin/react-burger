import { API_URL, AUTH_URL } from './constant';
import checkResponse from './check-response';
import { getCookie } from './cookie';

// регистрация нового пользователя
export const fetchUserRegistration = async (form) => {
  const { name, email, password } = form; 
  return await fetch(`${API_URL}${AUTH_URL.REGISTER}`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({
      'email': `${email}`, 
      'password': `${password}`, 
      'name': `${name}`
    })
  })
  .then(res => checkResponse(res))
};

// авторизоваться с ранее созданными данными пользователя(логином и паролем)
export const fetchUserAuthorization = async (form) => {
  const { email, password } = form;
  return await fetch(`${API_URL}${AUTH_URL.LOGIN}`,{
    method: 'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      'email': email,
      'password': password
    })
  })
  .then(res => checkResponse(res))
};

// закрытие авторизыции
export const fetchLogoutUser = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  return await fetch(`${API_URL}${AUTH_URL.LOGOUT}`,{
    method: 'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      token: refreshToken
    })
   })
   .then(res => checkResponse(res))
};

// получение данных о пользователе
export const fetchGetDataUser = async () => {
  return await fetch(`${API_URL}${AUTH_URL.UPDATING_USER_INFO}`,{
    method: 'GET',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    },
    // redirect: 'follow',
    // referrerPolicy: 'no-referrer'
  })
  .then(res => checkResponse(res))
}; 

// изменение данных о пользователе
export const  fetchChangeDataUser = async (form) =>{
  const { name, email, password } = form;
  return await fetch(`${API_URL}${AUTH_URL.UPDATING_USER_INFO}`,{
    method: 'PATCH',
    headers: {
     'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
      'password': password
    })
  })
  .then(res => checkResponse(res))
}; 