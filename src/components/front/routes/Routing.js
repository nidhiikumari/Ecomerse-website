import React from 'react';
// import {Route,Switch } from 'react-router-dom';
// import Products  from '../products/Products';
import Products from '../products/Products';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import { 
    Routes,
    Route,
    Switch   
  } from "react-router-dom";

const Routing = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
      
            <Switch>
                <Route  path='/' exact >
                  <Products productItems = {productItems} handleAddProduct={handleAddProduct}/>
                 
                </Route>
                <Route path='/signup' exact>
                  <Signup/>
                  </Route>
                  <Route path='/cart' exact>
              <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
                  </Route>
            </Switch>
        
    </div>
  )
}

export default Routing;