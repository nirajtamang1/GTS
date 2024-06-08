//Courier Charges
const courierCharge = [
  { maxWeight: 200, charge: 5 },
  { maxWeight: 500, charge: 10 },
  { maxWeight: 1000, charge: 15 },
  { maxWeight: 5000, charge: 20 },
];

//Calculate the courier Prices
const getCourierPrice = (weight) => {
  for (let i = 0; i < courierCharge.length; i++) {
    if (courierCharge[i].maxWeight >= weight) {
      return courierCharge[i].charge;
    }
  }
  return 0;
};

// create the packages
export const createPackages = (products) => {
  let packages = [];
  let currentPackage = {
    items: [],
    totalWeight: 0,
    totalPrice: 0,
    courierPrice: 0,
  };

  products.forEach((product) => {
    if (currentPackage.totalPrice + product.price > 250) {
        // Create the new package if the amount is more than 250
      packages.push(currentPackage);
      currentPackage = {
        items: [],
        totalWeight: 0,
        totalPrice: 0,
        courierPrice: 0,
      };
    }
    currentPackage.items.push(product.name);
    currentPackage.totalWeight += product.weight;
    currentPackage.totalPrice += product.price;
    currentPackage.courierPrice += getCourierPrice(product.weight);
  });

  //push the last packages
  if (currentPackage.items.length > 0) {
    packages.push(currentPackage);
  }
  console.log(packages);
  return packages;
};
