import React from 'react';
import  './productcts.css';


const Products = ({ productItems, handleAddProduct }) => {

   
  return (
    <div className='products'>
     
      {
        productItems.map((productItem) =>{
          return(
            <div className='card'>
              <div>
                 <img src={productItem.image} alt={productItem.name} className='product-img' />
            </div>
            <div>
              <h3 className='product-name'>{productItem.name}</h3>
            </div>
            <div className='product-price'>
             Price: ${productItem.price}

            </div>
            <div>
              <button className='product-add-button' onClick={() => handleAddProduct(productItem)}>Add To Cart</button>
            </div>
            </div>
          )
        })
      }     
      </div>

  );
  
}

export default Products;