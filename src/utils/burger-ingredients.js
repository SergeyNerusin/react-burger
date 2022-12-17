import { useSelector } from "react-redux";

export  function useBurgerIngredients(order) {

  const listIngredients = useSelector(store => store.ingredients.data);

  const id_burg = order.ingredients.reduce((prevVal, item) => (
    // eslint-disable-next-line
    prevVal[item] = (prevVal[item] || 0) + 1, prevVal
  ),{});

  const burg = Object.keys(id_burg).map(id => listIngredients.find(ingr => 
    ingr._id === id && ingr.type !== 'bun' ? ingr.things = id_burg[id] :
    ingr._id === id && ingr.type === 'bun' ? ingr.things = 2 : null)
  );

  const price = burg.reduce((sum, item) => sum + item.price * item.things,0);

  return [burg, price];
}