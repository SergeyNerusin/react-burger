
/* инфо об отдельно взятом ингредиенте */
import { ADD_INGR_DETAILS,
         DEL_INGR_DETAILS } from '../actions/action-show-ingr-details';

const initialInfoIngrState = { ingredient: null };

export const infoIngredientReducer = (state = initialInfoIngrState, action) => {
  switch(action.type){
    case ADD_INGR_DETAILS:
      return {
        ...state,
        ingredient: action.ingr,
      };
      
    case DEL_INGR_DETAILS:
      return {
        ...state,
        ingredient: null
      };

    default: {
      return state;
    }
  }
};
