/* для данных о текущем ингредиенте для просмотра модальном окне */ 

export const ADD_INGR_DETAILS = 'ADD_INGR_DETAILS';
export const DEL_INGR_DETAILS = 'DEL_INGR_DETAILS';

export function showIngrDetails(data){
  return {
    type: ADD_INGR_DETAILS,
    ingr: data
  };
}

export function delIngrDetails(){
  return {
    type: DEL_INGR_DETAILS
  };
}
