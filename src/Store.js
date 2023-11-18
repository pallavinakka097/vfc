import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useProductContext from './context/hooks'
import './store.css'
const CardComponent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { setSelectedItem } = useProductContext();
  useEffect(() => {
    axios.get('http://localhost:9090/stores')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);
  // ...
return (
  <div className="ui cards"> 
    {data.map((item,index) => {
      return (
        <div className="card" key={index}>
          <div className="image">
            <img src={item.image} alt={item.storename} onClick={()=>{
              setSelectedItem(item.storename)
              navigate('/storeitems')
            }}/>
          </div>
          <div>{item.storename}</div>
        </div>
      );
    })}
  </div>
);
  
};

export default CardComponent;