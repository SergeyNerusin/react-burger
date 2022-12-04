/* для получения списка ингредиентов */ 
import { fetchDataIngredients } from '../../../utils/burger-api';

export const GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST'; // экшн получить ингредиенты 
export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS'; 
export const GET_INGREDIENT_ERRОR = 'GET_INGREDIENT_ERRОR';

export function getIngr() {
 return function(dispatch){
  dispatch({
    type: GET_INGREDIENT_REQUEST 
  });

  fetchDataIngredients()
  .then(res => {
    if(res && res.success){
    dispatch({
      type: GET_INGREDIENT_SUCCESS,
      data: res.data
    });
    } else {
      dispatch({
      type: GET_INGREDIENT_ERRОR
    });
    }
  })
  .catch(() => dispatch({ 
    type: GET_INGREDIENT_ERRОR 
  })); 
 };
}







