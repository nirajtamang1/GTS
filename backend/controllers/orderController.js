import { createPackages } from "../services/packageServices.js";

export const placeOrder = (req, res) => {
  // Extracting the product from the request body
  const selectedProducts = req.body;
  const packages = createPackages(selectedProducts);
  res.json({ packages });
};
