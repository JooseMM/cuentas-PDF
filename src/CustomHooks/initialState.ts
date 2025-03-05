import { Charge, Order } from "../Models";

export const singleChargeInitialState: Charge = {
  productName: "",
  productQuantity: 0,
  productPrice: 0,
};

export const orderInitialState: Order = {
  clientName: "",
  clientCompany: "",
  charges: [],
  totalCharge: 0,
};
