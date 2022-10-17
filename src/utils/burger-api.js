import API_URL  from './constant';
  

const checkResponse = (res) => {
  if (res.ok) {
        return res.json();
      } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
};

export const fetchGetOrderNumber = async(ingredientsId) => {
  return fetch(`${API_URL}/api/orders`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ingredients: ingredientsId})
          })
          .then(res => checkResponse(res))
};  

export const fetchDataIngredients = async () => {
  return fetch(`${API_URL}/api/ingredients`)
         .then(res => checkResponse(res))
};      