/* для получения списка ингредиентов */ 
import { fetchDataIngredients } from '../../../utils/burger-api';

export const GET_INGR_REQUEST = 'GET_INGR_REQUEST'; // экшн получить ингредиенты 
export const GET_INGR_SUCCESS = 'GET_INGR_SUCCESS'; 
export const GET_INGR_ERRОR = 'GET_INGR_ERRОR';

export function getIngr() {
 return function(dispatch){
  dispatch({
    type: GET_INGR_REQUEST 
  });

  fetchDataIngredients()
  .then(res => {
    if(res && res.success){
    dispatch({
      type: GET_INGR_SUCCESS,
      data: res.data
    });
    } else {
      dispatch({
      type: GET_INGR_ERRОR
    });
    }
  })
  .catch(() => dispatch({ 
    type: GET_INGR_ERRОR 
  })); 
 };
}







