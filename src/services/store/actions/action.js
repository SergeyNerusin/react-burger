/* Получение списка ингредиентов от API */ 
import { fetchDataIngradients } from '../../../utils/burger-api';

export const GET_INGR_REQUEST = 'GET_INGR_REQUEST'; // экшн получить ингредиенты 
export const GET_INGR_SUCCESS = 'GET_INGR_SUCCESS'; 
export const GET_INGR_ERR = 'GET_INGR_ERR';

export function getIngr() {
 return function(dispatch){
  dispatch({
    type: GET_INGR_REQUEST 
  });

  fetchDataIngradients()
  .then(res => {
    if(res && res.success){
    dispatch({
      type: GET_INGR_SUCCESS,
      data: res.data
    });
    } else {
      dispatch({
      type: GET_INGR_ERR
    });
    }
  }); 
 
 };
};

/* данные о текущем ингредиенте для просмотра */ 

export const ADD_INGR_DETAILS = 'ADD_INGR_DETAILS';
export const DEL_INGR_DETAILS = 'DEL_INGR_DETAILS';

export function showIngrDetails(data){
  return ({
    type: ADD_INGR_DETAILS,
    ingr: data
  });
}

export function delIngrDetails(){
  return ({
    type: DEL_INGR_DETAILS,
  });
}

