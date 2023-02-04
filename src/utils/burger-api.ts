import { API_URL, ORDERS }  from './constant';
import { request } from './fetch-request';
import { getCookie } from './cookie';

export const fetchGetOrderNumber = (ingredientsId:string[]) => 
  request(`${API_URL}${ORDERS}`,
           {  method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                   Authorization: 'Bearer ' + getCookie('token')
              },
              body: JSON.stringify({ingredients: ingredientsId})
           });

export const fetchDataIngredients = () => request(`${API_URL}/api/ingredients`,{});


export const fetchOrderInfo = (number:number) => request(`${API_URL}${ORDERS}/${number}`,{});
