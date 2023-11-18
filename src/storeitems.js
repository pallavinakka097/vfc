import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useProductContext from './context/hooks'
import { useNavigate } from 'react-router-dom';
import './store.css'
function StoreItems() {
  const { selectedItem } = useProductContext();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:9090/storesData?storename=${selectedItem}`)
      .then(response => {setData(response.data);
      console.log(data)})
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedItem]);

  const updateCart = (item) => {
    axios.post("http://localhost:9090/addcart", item)
      .then((response) => { console.log(response.data); })
      .catch((error) => { console.log(error); });
  }

  const navigateto = () => {
    navigate('/addtocart');
  }

  return (
    <div>
      <div className="card-container">
        {data.map((item, index) => {
          console.log(item);
          return (
            <div className="card" key={index}>
              <img src={item.image} alt={item.storename} />
              <h3>{item.name}</h3>
              <button onClick={() => { updateCart(item); }}>ADD TO CART</button>
            </div>
          );
        })}
        <button onClick={navigateto}>GO TO CART</button>
      </div>
    </div>
  );
}

export default StoreItems;
