/* для получения списка ингредиентов*/ 
import { GET_INGR_REQUEST, 
         GET_INGR_SUCCESS, 
         GET_INGR_ERR,

         ADD_INGR_DETAILS,
         DEL_INGR_DETAILS,

         GET_ORDER_REQUEST,
         GET_ORDER_SUCCESS,
         GET_ORDER_ERR,

         ADD_BURGER_INGR,
         ADD_BURGER_BUN,
         SORT_BURGER_INGR,
         DEL_BURGER_INGR } from '../actions/action';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: []
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
    case GET_INGR_ERR: 
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


/* инфо об отдельно взятом ингредиенте */ 
const initialInfoIngrState = {
  ingredient: {},
  active: false
}

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


/* инфо о сделанном заказе */ 
const initialOrderState = {
  order: 0,
  orderRequest: false,
  orderFailed: false,
};

export const createdOrderReducer = (state=initialOrderState, action) => {
  switch(action.type){
    case GET_ORDER_REQUEST: {
      return {
       ...state,
       orderRequest: true,
       orderFailed: false,
       show: false
      };
    }
    
    case GET_ORDER_SUCCESS: {
       return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        order: action.order,
      };
    }

    case GET_ORDER_ERR: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};


/* для списка выбранных ингредиентов в конструкторе бургера */ 
const initialBurgerState = {
  ingredients: [],
  bun: null
};

export const burgerConstructorReducer = (state = initialBurgerState, action) => {
  switch(action.type){
    case ADD_BURGER_INGR:{
      return{
        ...state,
        ingredients: [...state.ingredients,{...action.data, keyId: action.keyId}]
      };
    } 

    case ADD_BURGER_BUN: {
      return{
        ...state,
        bun: action.data
      };
    }

    case SORT_BURGER_INGR: {
        return {
         ...state,
         ingredients: action.sort 
        };   
    }
    
    case DEL_BURGER_INGR: {
       return {
        ...state,
        ingredients: state.ingredients.filter((ingr, index) => index !== action.index)
       };
    }

    default: {
      return state;
    }
  }
};





