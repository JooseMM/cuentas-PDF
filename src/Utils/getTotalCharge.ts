import { Charge } from "../Models";
import { currencyFormatter } from "./currencyFormatter";

const getTotalCharge = (chargeList: Charge[]) => {
  if (!chargeList) {
    return currencyFormatter(0);
  }
  const total = chargeList.reduce((accumulator, current) => {
    return (
      accumulator +
      Number(current.productPrice) * Number(current.productQuantity)
    );
  }, 0);
  return currencyFormatter(total);
};

export default getTotalCharge;
