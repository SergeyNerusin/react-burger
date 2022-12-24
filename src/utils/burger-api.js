import { API_URL, ORDERS }  from './constant';
import { request } from './fetch-request';

export const fetchGetOrderNumber = (ingredientsId) => 
  request(`${API_URL}/api/orders`,
           {  method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ingredients: ingredientsId})});

export const fetchDataIngredients = () => request(`${API_URL}/api/ingredients`,{});


export const fetchOrderInfo = (number) => request(`${API_URL}${ORDERS}/${number}`,{});
