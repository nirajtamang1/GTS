import React from "react";

//Component to display the order summary
const OrderSummary = ({ packages }) => {
  return (
    <div className="order-summary-container">
      {packages.length > 0 && (
        <div>
          <h2>Packages</h2>
          {packages.map((pkg, index) => (
            <div key={index} className="package">
              <h3>Package {index + 1}</h3>
              <p>Items: {pkg.items.join(", ")}</p>
              <p>Total Weight: {pkg.totalWeight}g</p>
              <p>Total Price: ${pkg.totalPrice}</p>
              <p>Courier Price: ${pkg.courierPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
