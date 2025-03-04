import { Charge, Order } from "../Models";

export const singleChargeInitialState: Charge = {
  productName: "",
  productQuantity: 0,
  productPrice: 0,
};

export const orderInitialState: Order = {
  clientName: "Jose Moreno",
  clientCompany: "Empresa Fitc",
  charges: [{ productName: 'landing page', productPrice: 100, productQuantity: 1}],
  totalCharge: 0,
};
