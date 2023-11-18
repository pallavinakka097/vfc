import React from 'react';
import Login from './userlogin';
import {Routes,Route} from 'react-router-dom';
import Signup from './userSignup';
import Home from './Home';
import Navbar from './Navbar';
import About from './about';
import Contact from './contact';
import Store from './Store';
import Ownersignup from './ownersignup';
import Ownerlogin from './ownerlogin';
import StoreItems from './storeitems';
import Addtocart from './addtocart';
import {Provider} from './context/ProductContext'
import Ownerstoreitems from './ownerstoreitems'
import AddItemForm from './additem';
function App() {
  return (
    <div>
    <Provider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/stores" element={<Store/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/ownerlogin" element={< Ownerlogin/>}/>
      <Route path='/ownerstoreitems' element={<Ownerstoreitems/>}/>
      <Route path="/storeitems" element={<StoreItems/>} />
      <Route path='/ownersignup' element={< Ownersignup/>} />
      <Route path='/addtocart' element={< Addtocart/>} />
      <Route path='/additem' element={<AddItemForm/>}/>
    </Routes>
    </Provider>
    </div> 
  );
}

export default App;
