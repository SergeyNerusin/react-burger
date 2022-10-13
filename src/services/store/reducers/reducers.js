/* для получения списка ингредиентов*/ 
const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: []
};

export const allIngredinentsReducer = (state = initialState , action) => {
  switch(action.type){

    default: {
      return state;
    }
  }
};

/* для списка ингредиентов в текущем конструкторе бургера */ 
const initialBurgerState = {
  ingredients: [],
  bun: null
};

export const burgerConstructorReducer = (state = initialBurgerState, action) => {
  switch(action.type){

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

    default: {
      return state;
    }
  }
};



