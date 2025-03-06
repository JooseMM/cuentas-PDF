import { Charge, Order } from "../Models";

const zeroToString = (0).toString();
export const singleChargeInitialState: Charge = {
  id: 0,
  productName: "",
  productQuantity: zeroToString,
  productPrice: zeroToString,
};

export const orderInitialState: Order = {
  clientName: "",
  clientCompany: "",
  charges: [],
  totalCharge: zeroToString,
};
