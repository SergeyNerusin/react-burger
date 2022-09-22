/* jshint esversion:6*/ 
import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Burgeringredients from '../Burgeringredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import checkResponse from '../../service/checkresponse';
import apiUrl  from '../../service/constant';
import IngredientDetails from '../Burgeringredients/IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import OrderDetails from '../BurgerConstructor/OrderDetails/OrderDetails';
import { order } from '../../utils/data';

const App = () => {
 const [ingredients, setIngredients] = React.useState([]);
 const [showModalIngrDetails, setShowModalIngrDetails] = React.useState(false);
 const [itemData, setItemData] = React.useState({});
 const [showModalOrder, setShowModalOrder] = React.useState(false); 

const handleItemData = (data) =>{
  setItemData(data);
  setShowModalIngrDetails(state => !state);
}; 

const handleOrder = () => {
  setShowModalOrder(true);
};

 const handleCloseModalIng = () => {
  setShowModalIngrDetails(false);
 };

 const handleCloseModalOrder = () => {
  setShowModalOrder(false);
 };

  React.useEffect(() => {
    const fetchDataIngradients = async () => {
        fetch(`${apiUrl}/api/ingredients`)
        .then(res => checkResponse(res))
        .then(res => setIngredients(res.data))
        .catch(error => console.error(error.message));
    };
    fetchDataIngradients(); 
  },[]); 
  
  return (ingredients.length > 0) && ( 
    <>
      <AppHeader/>
       <main className="container mb-10">
          <Burgeringredients data={ingredients} openModal={handleItemData}/> 
          <BurgerConstructor data={ingredients} openModal={handleOrder}/>
       </main>
       <Modal onClose={handleCloseModalIng} 
              show={showModalIngrDetails} 
              title={"Детали инградиента"}>
        <IngredientDetails data={itemData}/>
      </Modal>
      <Modal onClose={handleCloseModalOrder} 
             show={showModalOrder}>
             <OrderDetails order={order}/>
      </Modal>
    </>
  );
}

export default App;