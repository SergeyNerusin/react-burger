/* jshint esversion:6*/ 
import AppHeader from '../AppHeader/AppHeader';
import data from '../../utils/data';
import Burgeringredients from '../Burgeringredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'; 


const App = () => {
  return (
    <>
       <AppHeader/>
       <main className="container mb-10">
         <Burgeringredients data={data}/>
         <BurgerConstructor data={data}/> 
       </main>
    </>
   
  );
}

export default App;