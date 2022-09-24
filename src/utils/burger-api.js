import apiUrl  from '../services/constant';
  

const checkResponse = (res) => {
  if (res.ok) {
        return res.json();
      } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
};

export const apiGetOrderNumber = async(ingredientsId) => {
  return fetch(`${apiUrl}/api/orders`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ingredients: ingredientsId})
          })
          .then(res => checkResponse(res))
};  

export const fetchDataIngradients = async () => {
  return fetch(`${apiUrl}/api/ingredients`)
         .then(res => checkResponse(res))
};      