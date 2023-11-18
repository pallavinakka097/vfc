import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function AddItemForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [storename,setstorename]=useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9090/additem', {storename, name, image, price })
      .then(response => {
        if (response.data === 'success') {
          alert('Item added successfully!');
          navigate(-1)
        } else {
          alert('Error adding item');
        }
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Store Name:</label>
        <input type="text" value={storename} onChange={(e) => setstorename(e.target.value)} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div>
        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddItemForm;
