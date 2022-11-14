import { API_URL, AUTH_URL } from '../../utils/constant';
import checkResponse from '../../utils/check-response';

// регистрация нового пользователя
export const fetchUserRegistration = async (form) => {
  const { name, email, password } = form; 
  return await fetch(`${API_URL}${AUTH_URL.REGISTER}`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({'email': `${email}`, 
    'password': `${password}`, 
    'name': `${name}`})
  })
  .then(res => checkResponse(res))
};

// авторизоваться с ранее созданными данными пользователя(логином и паролем)
export const fetchUserAuthorization = async (form) => {
  const { email, password } = form;
  return await fetch(`${API_URL}${AUTH_URL.LOGIN}`,{
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(res => checkResponse(res))
};