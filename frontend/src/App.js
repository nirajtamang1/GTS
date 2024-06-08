import React, { useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import OrderSummary from "./components/OrderSummary";

function App() {
  // State Variable to track selected products and received products
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [packages, setPackages] = useState([]);

  // Function to handle the checkbox changes for product selection
  const handleProductSelect = (product) => {
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(product)) {
        return prevSelected.filter((item) => item !== product);
      } else {
        // If product is not selected, add it
        return [...prevSelected, product];
      }
    });
  };

  // Function to handle the placing order
  const handlePlaceOrder = async () => {
    try {
      // Make a post request to palce the order with selected product
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/placeOrder`,
        selectedProducts
      );
      setPackages(response.data.packages);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="app-container">
      <ProductList onProductSelect={handleProductSelect} />
      <button onClick={handlePlaceOrder} className="place-order-btn">
        Place Order
      </button>
      <OrderSummary packages={packages} />
    </div>
  );
}

export default App;
