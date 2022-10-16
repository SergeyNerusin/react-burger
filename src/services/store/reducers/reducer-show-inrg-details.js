
/* инфо об отдельно взятом ингредиенте */
import { ADD_INGR_DETAILS,
         DEL_INGR_DETAILS } from '../actions/action-show-ingr-details';

const initialInfoIngrState = {
  ingredient: {},
  active: false
};

export const infoIngredientReducer = (state = initialInfoIngrState, action) => {
  switch(action.type){
    case ADD_INGR_DETAILS:
      return {
        ...state,
        ingredient: action.ingr,
        active: true
      };
      
    case DEL_INGR_DETAILS:
      return {
        ...state,
        ingredient: {},
        active: false
      };

    default: {
      return state;
    }
  }
};
