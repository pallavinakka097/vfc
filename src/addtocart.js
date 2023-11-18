import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './addtocart.css'
const addtocart=() =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get('http://localhost:9090/addcart')
          .then(response => {
            setData(response.data);
            console.log(response.data);
          })
          .catch(error => console.error('Error:', error));
      }, []);
    return (
            <div>
              <h1>CART</h1>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <img src={product.image} alt="product"/>
                      </td>
                      <td>{product.productname}</td>
                      <td>{product.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
      );
      
}

export default addtocart