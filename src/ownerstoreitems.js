// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import useProductContext from './context/hooks'
// import './store.css'
// function StoreItems() {
//   const { selectedItem } = useProductContext();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios.get(`http://localhost:9090/ownerstoreitems?storename=${selectedItem}`)
//       .then(response => setData(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, [selectedItem]);
  
//   return (
//     <div>
//       <div className="card-container">
//         {data.map((item, index) => {
//           console.log(item);
//           return (
//             <div className="card" key={index}>
//               <img src={item.image} alt={item.storename} />
//               <h3>{item.name}</h3>
//               <button>REMOVE ITEM</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default StoreItems;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useProductContext from './context/hooks'
import './store.css'
import { useNavigate } from 'react-router-dom';
function StoreItems() {
  const { selectedItem } = useProductContext();
  const [data, setData] = useState([]);
  const navigate=useNavigate();
const navigatet1=()=>{
        navigate('/additem')
  }
  const removeItem = (id) => {
    axios.post(`http://localhost:9090/removeitem`, { id })
      .then(response => {
        if (response.data === "success") {
          setData(prevData => prevData.filter(item => item.id !== id));
        } else {
          console.error('Error removing item');
        }
      })
      .catch(error => console.error('Error removing item:', error));
  };

  useEffect(() => {
    axios.get(`http://localhost:9090/ownerstoreitems?storename=${selectedItem}`)
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [selectedItem]);

  return (
    <div>
      <div className="card-container">
        {data.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.storename} />
            <h3>{item.name}</h3>
            <button onClick={() => removeItem(item.id)}>REMOVE ITEM</button>
          </div>
        ))}
        <button onClick={navigatet1}>ADD ITEM</button>
      </div>
    </div>
  );
}

export default StoreItems;
