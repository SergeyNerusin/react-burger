import { API_URL }  from './constant';
  

const checkResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const fetchGetOrderNumber = (ingredientsId) => {
  return fetch(`${API_URL}/api/orders`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ingredients: ingredientsId})
          })
          .then(res => checkResponse(res))
};  

export const fetchDataIngredients = () => {
  return fetch(`${API_URL}/api/ingredients`)
         .then(res => checkResponse(res))
};      