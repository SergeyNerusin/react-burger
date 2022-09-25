/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../app-header/app-header';
import Burgeringredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import IngredientDetails from '../burger-ingredients/ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../burger-constructor/order-details/order-details';
import { apiGetOrderNumber, fetchDataIngradients } from '../../utils/burger-api';
import { BurgerConstructorContext } from '../../services/burger-constr-context';


const App = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [showModalIngrDetails, setShowModalIngrDetails] = React.useState(false);
  const [itemData, setItemData] = React.useState({});
  const [showModalOrder, setShowModalOrder] = React.useState(false); 
  const [orderNumber, setOrderNumber] = React.useState(0);
  const handleItemData = (data) =>{
    setItemData(data);
    setShowModalIngrDetails(state => !state);
  }; 

  const handleOrder = (ingredientsId) => {
    apiGetOrderNumber(ingredientsId)
    .then(data => { 
      if(data.success){ 
          setOrderNumber(data.order.number);
          setShowModalOrder(true);
      } else {
          setOrderNumber(0);
        }
    }) 
    .catch(error => console.error(error.message));
  };

 const handleCloseModalIng = () => {
  setShowModalIngrDetails(false);
 };

 const handleCloseModalOrder = () => {
  setShowModalOrder(false);
 };

  React.useEffect(() => {
    fetchDataIngradients() 
    .then(res => setIngredients(res.data))
    .catch(error => console.error(error.message));
  },[]); 
  
  return (ingredients.length > 0) && ( 
    <>
      <AppHeader/>
       <main className="container mb-10">
          <Burgeringredients data={ingredients} openModal={handleItemData}/> 
          <BurgerConstructorContext.Provider value={ingredients}>
            <BurgerConstructor openModal={handleOrder}/>
          </BurgerConstructorContext.Provider>
       </main>
       <Modal onClose={handleCloseModalIng} 
              show={showModalIngrDetails} 
              title={"Детали инградиента"}>
        <IngredientDetails data={itemData}/>
      </Modal>
      <Modal onClose={handleCloseModalOrder} 
             show={showModalOrder}>
             <OrderDetails orderNumber={orderNumber}/>
      </Modal>
    </>
  );
}

export default App;
