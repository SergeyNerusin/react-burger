/* для получения списка ингредиентов*/ 
import { GET_INGR_REQUEST, 
         GET_INGR_SUCCESS, 
         GET_INGR_ERRОR} from '../actions/action-get-ingr';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: null
};

export const allIngredinentsReducer = (state = initialState , action) => {
  switch(action.type){
    case GET_INGR_REQUEST: 
      return {
        ...state,
        dataRequest: true,
        dataFailed: false
      };
    case GET_INGR_SUCCESS:
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        dataFailed: false
      };
    case GET_INGR_ERRОR: 
      return {
        ...state,
        dataRequest: false,
        dataFailed: true
      };

    default: {
      return state;
    }
  }
};








