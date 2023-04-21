/* для получения списка ингредиентов*/ 
import { TIngredientsType } from '../../../utils/type';
import { GET_INGREDIENT_REQUEST, 
         GET_INGREDIENT_SUCCESS, 
         GET_INGREDIENT_ERRОR,
         TBurgerIngredientsActions} from '../actions/action-get-ingr';


type TinitialState = {
  dataRequest: boolean;
  dataFailed: boolean;
  data: null | Array<TIngredientsType>;
}

const initialState: TinitialState = {
  dataRequest: false,
  dataFailed: false,
  data: null
};

export const allIngredinentsReducer = (state = initialState, 
  action:TBurgerIngredientsActions): TinitialState => {
  switch(action.type){
    case GET_INGREDIENT_REQUEST: 
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      };
    case GET_INGREDIENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        dataFailed: false
      };
    case GET_INGREDIENT_ERRОR: 
      return {
        ...state,
        dataRequest: false,
        dataFailed: true
      };

    default: 
      return state;
  }
};








