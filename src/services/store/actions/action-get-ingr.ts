/* для получения списка ингредиентов */ 
import { fetchDataIngredients } from '../../../utils/burger-api';
import { AppDispatch, AppThunk } from '../types-store';
import { TIngredientsType } from '../../../utils/type';

 
export const GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST'; 
export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS'; 
export const GET_INGREDIENT_ERRОR = 'GET_INGREDIENT_ERRОR';


interface IGetIngredientRequest {
  readonly type: typeof GET_INGREDIENT_REQUEST;
}

interface IGetIngredientSucces {
  readonly type: typeof GET_INGREDIENT_SUCCESS;
  data: TIngredientsType[];
}

interface IGetIngredientError {
  readonly type: typeof GET_INGREDIENT_ERRОR;
}

export type TBurgerIngredientsActions =
IGetIngredientRequest
| IGetIngredientSucces
| IGetIngredientError


export const getIngr: AppThunk = () => {
 return function(dispatch: AppDispatch){
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







