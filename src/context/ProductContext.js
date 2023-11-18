const { createContext, useState } = require("react");
const ProductContext = createContext();

const Provider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [useremail, setuserEmail] = useState("");
  const valueToShare = {
    selectedItem,setSelectedItem,
    useremail, setuserEmail,
  };

  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
};

export { Provider };

export default ProductContext;