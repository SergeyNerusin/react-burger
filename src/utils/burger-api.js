import { API_URL }  from './constant';
import checkResponse from './check-response';  



export const fetchGetOrderNumber = async (ingredientsId) => {
  return await fetch(`${API_URL}/api/orders`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ingredients: ingredientsId})
          })
          .then(res => checkResponse(res))
};  

export const fetchDataIngredients =  async () => {
  return await fetch(`${API_URL}/api/ingredients`)
         .then(res => checkResponse(res))
}; 

